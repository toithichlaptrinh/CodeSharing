using CodeSharing.WebPortal.Interfaces;
using CodeSharing.WebPortal.ViewModels;
using Microsoft.AspNetCore.Mvc;

namespace CodeSharing.WebPortal.Controllers;

public class ContactController : Controller
{
    private readonly IContactApiClient _contactApiClient;

    public ContactController(IContactApiClient contactApiClient)
    {
        _contactApiClient = contactApiClient;
    }
    
    public async Task<IActionResult> Index()
    {
        var contact = await _contactApiClient.GetContacts();
        var items = new ContactViewModel()
        {
            Contacts = contact
        };
        
        return View(items);
    }
}