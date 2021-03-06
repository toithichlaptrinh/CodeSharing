// Licensed to the .NET Foundation under one or more agreements.
// The .NET Foundation licenses this file to you under the MIT license.

#nullable disable

using System.ComponentModel.DataAnnotations;
using System.Text;
using CodeSharing.Server.Datas.Entities;
using CodeSharing.Server.Services.Interfaces;
using CodeSharing.ViewModels.Commons;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.UI.Services;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using Microsoft.AspNetCore.WebUtilities;

namespace CodeSharing.Server.Areas.Identity.Pages.Account;

[AllowAnonymous]
public class ForgotPasswordModel : PageModel
{
    private readonly IEmailSender _emailSender;
    private readonly UserManager<User> _userManager;
    private readonly IViewRenderService _viewRenderService;

    public ForgotPasswordModel(UserManager<User> userManager, IEmailSender emailSender,
        IViewRenderService viewRenderService)
    {
        _userManager = userManager;
        _emailSender = emailSender;
        _viewRenderService = viewRenderService;
    }

    /// <summary>
    ///     This API supports the ASP.NET Core Identity default UI infrastructure and is not intended to be used
    ///     directly from your code. This API may change or be removed in future releases.
    /// </summary>
    [BindProperty]
    public InputModel Input { get; set; }

    public async Task<IActionResult> OnPostAsync()
    {
        if (ModelState.IsValid)
        {
            var user = await _userManager.FindByEmailAsync(Input.Email);
            if (user == null || !await _userManager.IsEmailConfirmedAsync(user))
                // Don't reveal that the user does not exist or is not confirmed
                return RedirectToPage("./ForgotPasswordConfirmation");

            // For more information on how to enable account confirmation and password reset please
            // visit https://go.microsoft.com/fwlink/?LinkID=532713
            var code = await _userManager.GeneratePasswordResetTokenAsync(user);
            code = WebEncoders.Base64UrlEncode(Encoding.UTF8.GetBytes(code));
            var callbackUrl = Url.Page(
                "/Account/ResetPassword",
                null,
                new { area = "Identity", code },
                Request.Scheme);

            // Get information user
            var emailModel = new MailContent
            {
                To = Input.Email,
                Subject = "?????t l???i m???t kh???u",
                Body =
                    "B???n nh???n ???????c email n??y v?? ???? g???i y??u c???u ?????t l???i m???t kh???u t??i kho???n CodeSharing. Vui l??ng nh???p chu???t v??o ???????ng d???n d?????i ????y ????? ?????t l???i m???t kh???u:",
                UserName = user.LastName + " " + user.FirstName,
                Url = callbackUrl
            };

            var htmlContent = await _viewRenderService.RenderToStringAsync("_ResetPasswordEmail", emailModel);

            await _emailSender.SendEmailAsync(
                Input.Email,
                "[CodeSharing] Y??u C???u L???y L???i M???t Kh???u",
                htmlContent);

            return RedirectToPage("./ForgotPasswordConfirmation");
        }

        return Page();
    }

    /// <summary>
    ///     This API supports the ASP.NET Core Identity default UI infrastructure and is not intended to be used
    ///     directly from your code. This API may change or be removed in future releases.
    /// </summary>
    public class InputModel
    {
        /// <summary>
        ///     This API supports the ASP.NET Core Identity default UI infrastructure and is not intended to be used
        ///     directly from your code. This API may change or be removed in future releases.
        /// </summary>
        [Required(ErrorMessage = "Email kh??ng ???????c ????? tr???ng")]
        [EmailAddress]
        public string Email { get; set; }
    }
}