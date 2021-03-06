using CodeSharing.Utilities.Commons;
using CodeSharing.ViewModels.Contents.Post;
using CodeSharing.ViewModels.Systems.User;

namespace CodeSharing.WebPortal.Interfaces;

public interface IUserApiClient
{
    Task<Pagination<UserVm>> GetUsersPaging(int pageIndex, int pageSize);
    Task<UserVm> GetById(string id);
    Task<Pagination<PostQuickVm>> GetPostsByUserId(string userId, int pageIndex, int pageSize);
    Task<bool> PutUser(string id, UserCreateRequest request);
}