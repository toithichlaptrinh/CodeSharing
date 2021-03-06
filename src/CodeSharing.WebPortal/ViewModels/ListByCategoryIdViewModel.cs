using CodeSharing.Utilities.Commons;
using CodeSharing.ViewModels.Contents.Category;
using CodeSharing.ViewModels.Contents.Post;

namespace CodeSharing.WebPortal.ViewModels;

public class ListByCategoryIdViewModel
{
    public Pagination<PostQuickVm> Data { get; set; }
    public CategoryVm Category { get; set; }
}