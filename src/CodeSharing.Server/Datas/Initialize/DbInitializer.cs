using CodeSharing.Server.Datas.Entities;
using CodeSharing.Server.Datas.Provider;
using Microsoft.AspNetCore.Identity;

namespace CodeSharing.Server.Datas.Initialize;

public class DbInitializer
{
    private const string AdminRoleName = "Admin";
    private const string UserRoleName = "Member";
    private readonly ApplicationDbContext _context;
    private readonly RoleManager<IdentityRole> _roleManager;
    private readonly UserManager<User> _userManager;

    public DbInitializer(ApplicationDbContext context, UserManager<User> userManager,
        RoleManager<IdentityRole> roleManager)
    {
        _context = context;
        _userManager = userManager;
        _roleManager = roleManager;
    }

    public async Task Seed()
    {
        #region Role

        if (!_roleManager.Roles.Any())
        {
            await _roleManager.CreateAsync(new IdentityRole
            {
                Id = AdminRoleName,
                Name = AdminRoleName,
                NormalizedName = AdminRoleName.ToUpper()
            });
            await _roleManager.CreateAsync(new IdentityRole
            {
                Id = UserRoleName,
                Name = UserRoleName,
                NormalizedName = UserRoleName.ToUpper()
            });
        }

        #endregion Role

        #region User

        if (!_userManager.Users.Any())
        {
            var admin = await _userManager.CreateAsync(new User
            {
                Id = Guid.NewGuid().ToString(),
                UserName = "admin",
                FirstName = "Code",
                LastName = "Sharing",
                Email = "codesharing.contact@gmail.com",
                LockoutEnabled = false
            }, "Admin@123");
            if (admin.Succeeded)
            {
                var user = await _userManager.FindByNameAsync("admin");
                await _userManager.AddToRoleAsync(user, AdminRoleName);
            }
        }

        #endregion User

        #region Function

        if (!_context.Functions.Any())
        {
            _context.Functions.AddRange(new List<Function>
            {
                new()
                {
                    Id = "DASHBOARD",
                    Name = "Th???ng k??",
                    ParentId = null,
                    SortOrder = 1,
                    Url = "/dashboard",
                    Icon = "fa-dashboard"
                },

                new()
                {
                    Id = "CONTENT",
                    Name = "N???i dung",
                    ParentId = null,
                    Url = "/contents",
                    Icon = "fa-table"
                },

                new()
                {
                    Id = "CONTENT_CATEGORY",
                    Name = "Danh m???c",
                    ParentId = "CONTENT",
                    Url = "/contents/categories"
                },
                new()
                {
                    Id = "CONTENT_POST",
                    Name = "B??i vi???t",
                    ParentId = "CONTENT",
                    SortOrder = 2,
                    Url = "/content/posts",
                    Icon = "fa-edit"
                },
                new()
                {
                    Id = "CONTENT_COMMENT",
                    Name = "Trang",
                    ParentId = "CONTENT",
                    SortOrder = 3,
                    Url = "/contents/comments",
                    Icon = "fa-edit"
                },
                new()
                {
                    Id = "CONTENT_REPORT",
                    Name = "B??o x???u",
                    ParentId = "CONTENT",
                    SortOrder = 3,
                    Url = "/contents/reports",
                    Icon = "fa-edit"
                },

                new()
                {
                    Id = "STATISTIC",
                    Name = "Th???ng k??",
                    ParentId = null,
                    Url = "/statistics",
                    Icon = "fa-bar-chart-o"
                },

                new()
                {
                    Id = "STATISTIC_MONTHLY_NEWMEMBER",
                    Name = "????ng k?? t???ng th??ng",
                    ParentId = "STATISTIC",
                    SortOrder = 1,
                    Url = "/statistics/monthly-registers",
                    Icon = "fa-wrench"
                },
                new()
                {
                    Id = "STATISTIC_MONTHLY_NEWKB",
                    Name = "B??i ????ng h??ng th??ng",
                    ParentId = "STATISTIC",
                    SortOrder = 2,
                    Url = "/statistics/monthly-newkbs",
                    Icon = "fa-wrench"
                },
                new()
                {
                    Id = "STATISTIC_MONTHLY_COMMENT",
                    Name = "Comment theo th??ng",
                    ParentId = "STATISTIC",
                    SortOrder = 3,
                    Url = "/statistics/monthly-comments",
                    Icon = "fa-wrench"
                },

                new()
                {
                    Id = "SYSTEM",
                    Name = "H??? th???ng",
                    ParentId = null,
                    Url = "/systems",
                    Icon = "fa-th-list"
                },

                new()
                {
                    Id = "SYSTEM_USER",
                    Name = "Ng?????i d??ng",
                    ParentId = "SYSTEM",
                    Url = "/system/users",
                    Icon = "fa-desktop"
                },
                new()
                {
                    Id = "SYSTEM_ROLE",
                    Name = "Nh??m quy???n",
                    ParentId = "SYSTEM",
                    Url = "/system/roles",
                    Icon = "fa-desktop"
                },
                new()
                {
                    Id = "SYSTEM_FUNCTION",
                    Name = "Ch???c n??ng",
                    ParentId = "SYSTEM",
                    Url = "/system/functions",
                    Icon = "fa-desktop"
                },
                new()
                {
                    Id = "SYSTEM_PERMISSION",
                    Name = "Quy???n h???n",
                    ParentId = "SYSTEM",
                    Url = "/system/permissions",
                    Icon = "fa-desktop"
                }
            });
            await _context.SaveChangesAsync();
        }

        if (!_context.Commands.Any())
            _context.Commands.AddRange(new List<Command>
            {
                new() { Id = "VIEW", Name = "Xem" },
                new() { Id = "CREATE", Name = "Th??m" },
                new() { Id = "UPDATE", Name = "S???a" },
                new() { Id = "DELETE", Name = "Xo??" },
                new() { Id = "APPROVE", Name = "Duy???t" }
            });

        #endregion Function

        #region CommandInFunction

        var functions = _context.Functions;

        if (!_context.CommandInFunctions.Any())
            foreach (var function in functions)
            {
                var createAction = new CommandInFunction
                {
                    CommandId = "CREATE",
                    FunctionId = function.Id
                };
                _context.CommandInFunctions.Add(createAction);

                var updateAction = new CommandInFunction
                {
                    CommandId = "UPDATE",
                    FunctionId = function.Id
                };
                _context.CommandInFunctions.Add(updateAction);
                var deleteAction = new CommandInFunction
                {
                    CommandId = "DELETE",
                    FunctionId = function.Id
                };
                _context.CommandInFunctions.Add(deleteAction);

                var viewAction = new CommandInFunction
                {
                    CommandId = "VIEW",
                    FunctionId = function.Id
                };
                _context.CommandInFunctions.Add(viewAction);
            }

        if (!_context.Permissions.Any())
        {
            var adminRole = await _roleManager.FindByNameAsync(AdminRoleName);
            foreach (var function in functions)
            {
                _context.Permissions.Add(new Permission(function.Id, adminRole.Id, "CREATE"));
                _context.Permissions.Add(new Permission(function.Id, adminRole.Id, "UPDATE"));
                _context.Permissions.Add(new Permission(function.Id, adminRole.Id, "DELETE"));
                _context.Permissions.Add(new Permission(function.Id, adminRole.Id, "VIEW"));
            }

            var memberRole = await _roleManager.FindByNameAsync(UserRoleName);
            foreach (var function in functions)
                _context.Permissions.Add(new Permission(function.Id, memberRole.Id, "VIEW"));
        }

        #endregion CommandInFunction

        #region Category

        if (!_context.Categories.Any())
        {
            _context.Categories.AddRange(new List<Category>
            {
                new()
                {
                    ParentCategoryId = null,
                    Title = "C#",
                    Slug = "C-Sharp",
                    SortOrder = 1,
                    CreateDate = DateTime.Now,
                    IsParent = true
                },
                new()
                {
                    ParentCategoryId = 1,
                    Title = "NET Framework",
                    Slug = "NET-Framework",
                    SortOrder = 1,
                    CreateDate = DateTime.Now,
                    IsParent = false
                },
                new()
                {
                    ParentCategoryId = 1,
                    Title = "NET Core",
                    Slug = "NET-Core",
                    SortOrder = 2,
                    CreateDate = DateTime.Now,
                    IsParent = false
                },
                new()
                {
                    ParentCategoryId = null,
                    Title = "Angular",
                    Slug = "Angular",
                    SortOrder = 2,
                    CreateDate = DateTime.Now,
                    IsParent = false
                },
                new()
                {
                    ParentCategoryId = null,
                    Title = "SQL",
                    Slug = "SQL",
                    SortOrder = 3,
                    CreateDate = DateTime.Now,
                    IsParent = false
                },
            });
        }
        
        #endregion Category

        #region Labels

        if (!_context.Labels.Any())
        {
            _context.Labels.AddRange(new List<Label>
            {
                new()
                {
                    Id = "Technology",
                    Name = "Technology"
                },
                new()
                {
                    Id = "Programming",
                    Name = "Programming"
                },
                new()
                {
                    Id = "Development",
                    Name = "Development"
                },
                new()
                {
                    Id = "Angular",
                    Name = "Angular"
                },
                new()
                {
                    Id = "CSharp",
                    Name = "C#"
                },
                new()
                {
                    Id = "NETCore",
                    Name = "NETCore"
                },
                new()
                {
                    Id = "NETFramework",
                    Name = "NETFramework"
                },
                new()
                {
                    Id = "SQL",
                    Name = "SQL"
                }
            });
        }

        #endregion Labels

        #region Contact

        if (!_context.Contacts.Any())
            _context.Contacts.AddRange(new Contact
            {
                Email = "codesharing.contact@gmail.com",
                Location = "Th??nh ph??? H??? Ch?? Minh, Vi???t Nam",
                Phone = "0969 772 069"
            });

        #endregion Contact

        await _context.SaveChangesAsync();
    }
}