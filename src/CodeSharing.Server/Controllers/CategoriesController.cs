using CodeSharing.Server.Authorization;
using CodeSharing.Server.Datas.Entities;
using CodeSharing.Server.Datas.Provider;
using CodeSharing.Utilities.Constants;
using CodeSharing.Utilities.Helpers;
using CodeSharing.ViewModels.Contents.Category;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace CodeSharing.Server.Controllers;

public class CategoriesController : BaseController
{
    private readonly ApplicationDbContext _context;
    private readonly ILogger<CategoriesController> _logger;

    public CategoriesController(ApplicationDbContext context, ILogger<CategoriesController> logger)
    {
        _context = context;
        _logger = logger ?? throw new ArgumentException(null, nameof(logger));
    }

    [AllowAnonymous]
    [HttpGet]
    public async Task<IActionResult> GetCategories()
    {
        var items = await _context.Categories.Select(x => new CategoryVm()
        {
            Id = x.Id,
            ParentCategoryId = x.ParentCategoryId,
            Title = x.Title,
            Slug = x.Slug,
            SortOrder = x.SortOrder,
            IsParent = x.IsParent
        }).OrderBy(x => x.SortOrder).ToListAsync();
        
        

        _logger.LogInformation("Successful execution of get categories request");
        return Ok(items);
    }
    
    [AllowAnonymous]
    [HttpGet("{id:int}")]
    public async Task<IActionResult> GetById(int id)
    {
        var category = await _context.Categories.FindAsync(id);
        if (category == null)
        {
            return NotFound(new ApiNotFoundResponse($"Can't found category item for id = {id} in database"));
        }

        var items = new CategoryVm()
        {
            Id = category.Id,
            ParentCategoryId = category.ParentCategoryId,
            Title = category.Title,
            Slug = category.Slug,
            SortOrder = category.SortOrder,
            IsParent = category.IsParent
        };

        _logger.LogInformation("Successful execution of get categories request");
        return Ok(items);
    }
    
    [HttpPost]
    [ClaimRequirement(FunctionCodeConstants.CONTENT_CATEGORY, CommandCodeConstants.CREATE)]
    public async Task<IActionResult> PostCategory([FromBody] CategoryCreateRequest request)
    {
        var item = new Category()
        {
            ParentCategoryId = request.ParentCategoryId,
            Title = request.Title,
            Slug = request.Slug,
            SortOrder = request.SortOrder,
            IsParent = request.IsParent
        };
        _context.Categories.Add(item);

        var result = await _context.SaveChangesAsync();
        if (result > 0)
        {
            return CreatedAtAction(nameof(GetById), new { id = item.Id }, request);
        }

        return BadRequest(new ApiBadRequestResponse("Create category failed"));
    }

    [HttpPut("{id:int}")]
    [ClaimRequirement(FunctionCodeConstants.CONTENT_CATEGORY, CommandCodeConstants.UPDATE)]
    public async Task<IActionResult> PutCategory(int id, [FromBody] CategoryUpdateRequest request)
    {
        var category = await _context.Categories.FindAsync(id);
        if (category == null)
        {
            return NotFound(new ApiNotFoundResponse($"Can't found category item for id = {id} in database"));
        }

        if (id == request.ParentCategoryId)
        {
            return BadRequest(new ApiBadRequestResponse("Category cannot be a child itself."));
        }
        
        category.ParentCategoryId = request.ParentCategoryId;
        category.Title = request.Title;
        category.Slug = request.Slug;
        category.SortOrder = request.SortOrder;
        category.IsParent = request.IsParent;
        
        _context.Categories.Update(category);
        
        var result = await _context.SaveChangesAsync();
        if (result > 0)
        {
            return NoContent();
        }
        return BadRequest(new ApiBadRequestResponse("Update category failed"));
    }

    [HttpDelete("{id:int}")]
    [ClaimRequirement(FunctionCodeConstants.CONTENT_CATEGORY, CommandCodeConstants.DELETE)]
    public async Task<IActionResult> DeleteCategory(int id)
    {
        var category = await _context.Categories.FindAsync(id);
        if (category == null)
        {
            return NotFound(new ApiNotFoundResponse($"Can't found category item for id = {id} in database"));
        }
        
        _context.Categories.Remove(category);
        
        var result = await _context.SaveChangesAsync();
        if (result <= 0)
        {
            return BadRequest(new ApiBadRequestResponse("Can't delete category"));
        }
        
        var items = new CategoryVm()
        {
            Id = category.Id,
            IsParent = category.IsParent,
            ParentCategoryId = category.ParentCategoryId,
            Slug = category.Slug,
            SortOrder = category.SortOrder,
            Title = category.Title
        };
            
        return Ok(items);
    }
}