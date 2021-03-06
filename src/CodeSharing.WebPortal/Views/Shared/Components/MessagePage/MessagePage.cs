using CodeSharing.ViewModels.Commons;
using Microsoft.AspNetCore.Mvc;

namespace CodeSharing.WebPortal.Views.Shared.Components.MessagePage;

[ViewComponent]
public class MessagePage : ViewComponent
{
    public const string Componentname = "MessagePage";

    public IViewComponentResult Invoke(Message message)
    {
        // Thiết lập Header của HTTP Respone - chuyển hướng về trang đích
        HttpContext.Response.Headers.Add("REFRESH", $"{message.Secondwait};URL={message.Urlredirect}");
        return View(message);
    }
}