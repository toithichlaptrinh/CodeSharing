// Licensed to the .NET Foundation under one or more agreements.
// The .NET Foundation licenses this file to you under the MIT license.

#nullable disable

using System.ComponentModel.DataAnnotations;
using System.Net.Mail;
using System.Security.Claims;
using System.Text;
using CodeSharing.Server.Datas.Entities;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.UI.Services;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using Microsoft.AspNetCore.WebUtilities;

namespace CodeSharing.Server.Areas.Identity.Pages.Account;

[AllowAnonymous]
public class ExternalLoginModel : PageModel
{
    private readonly IEmailSender _emailSender;
    private readonly IUserEmailStore<User> _emailStore;
    private readonly ILogger<ExternalLoginModel> _logger;
    private readonly SignInManager<User> _signInManager;
    private readonly UserManager<User> _userManager;
    private readonly IUserStore<User> _userStore;

    public ExternalLoginModel(
        SignInManager<User> signInManager,
        UserManager<User> userManager,
        IUserStore<User> userStore,
        ILogger<ExternalLoginModel> logger,
        IEmailSender emailSender)
    {
        _signInManager = signInManager;
        _userManager = userManager;
        _userStore = userStore;
        _emailStore = GetEmailStore();
        _logger = logger;
        _emailSender = emailSender;
    }

    /// <summary>
    ///     This API supports the ASP.NET Core Identity default UI infrastructure and is not intended to be used
    ///     directly from your code. This API may change or be removed in future releases.
    /// </summary>
    [BindProperty]
    public InputModel Input { get; set; }

    /// <summary>
    ///     This API supports the ASP.NET Core Identity default UI infrastructure and is not intended to be used
    ///     directly from your code. This API may change or be removed in future releases.
    /// </summary>
    public string ProviderDisplayName { get; set; }

    /// <summary>
    ///     This API supports the ASP.NET Core Identity default UI infrastructure and is not intended to be used
    ///     directly from your code. This API may change or be removed in future releases.
    /// </summary>
    public string ReturnUrl { get; set; }

    /// <summary>
    ///     This API supports the ASP.NET Core Identity default UI infrastructure and is not intended to be used
    ///     directly from your code. This API may change or be removed in future releases.
    /// </summary>
    [TempData]
    public string ErrorMessage { get; set; }

    public IActionResult OnGet()
    {
        return RedirectToPage("./Login");
    }

    // Post request login by external login
    // Provider = Google, Facebook, Twitter
    public async Task<IActionResult> OnPost(string provider, string returnUrl = null)
    {
        // Check provider service request is exists
        var listProvider = (await _signInManager.GetExternalAuthenticationSchemesAsync()).ToList();

        var providerProcess = listProvider.Find(m => m.Name == provider);
        if (providerProcess == null) return NotFound("Service not valid" + provider);

        // Request a redirect to the external login provider.
        // redirectUrl - l?? Url s??? chuy???n h?????ng ?????n - sau khi CallbackPath (/dang-nhap-tu-google) thi h??nh xong
        // n?? b???ng identity/account/externallogin?handler=Callback
        // t???c l?? g???i OnGetCallbackAsync
        var redirectUrl = Url.Page("./ExternalLogin", "Callback", new { returnUrl });

        // Config
        var properties = _signInManager.ConfigureExternalAuthenticationProperties(provider, redirectUrl);

        // Chuy???n h?????ng ?????n d???ch v??? ngo??i (Googe, Facebook)
        return new ChallengeResult(provider, properties);
    }

    public async Task<IActionResult> OnGetCallbackAsync(string returnUrl = null, string remoteError = null)
    {
        returnUrl = returnUrl ?? Url.Content("~/");
        if (remoteError != null)
        {
            ErrorMessage = $"L???i provider: {remoteError}";
            return RedirectToPage("./Login", new { ReturnUrl = returnUrl });
        }

        // L???y th??ng tin do d???ch v??? ngo??i chuy???n ?????n
        var info = await _signInManager.GetExternalLoginInfoAsync();
        if (info == null)
        {
            ErrorMessage = "L???i th??ng tin t??? d???ch v??? ????ng nh???p.";
            return RedirectToPage("./Login", new { ReturnUrl = returnUrl });
        }

        // ????ng nh???p b???ng th??ng tin LoginProvider, ProviderKey t??? info cung c???p b???i d???ch v??? ngo??i
        // User n??o c?? 2 th??ng tin n??y s??? ???????c ????ng nh???p - th??ng tin n??y l??u t???i b???ng UserLogins c???a Database
        // Tr?????ng LoginProvider v?? ProviderKey ---> t????ng ???ng UserId 
        var result = await _signInManager.ExternalLoginSignInAsync(info.LoginProvider, info.ProviderKey,
            false, true);

        if (result.Succeeded)
        {
            // User ????ng nh???p th??nh c??ng v??o h??? th???ng theo th??ng tin info
            _logger.LogInformation("{Name} logged in with {LoginProvider} provider.", info.Principal.Identity.Name,
                info.LoginProvider);
            return LocalRedirect(returnUrl);
        }

        if (result.IsLockedOut)
            // B??? t???m kh??a
            return RedirectToPage("./Lockout");

        var userExisted = await _userManager.FindByLoginAsync(info.LoginProvider, info.ProviderKey);
        if (userExisted != null)
            // ???? c?? Acount, ???? li??n k???t v???i t??i kho???n ngo??i - nh??ng kh??ng ????ng nh???p ???????c
            // c?? th??? do ch??a k??ch ho???t email
            return RedirectToPage("./RegisterConfirmation", new { userExisted.Email });

        // Ch??a c?? Account li??n k???t v???i t??i kho???n ngo??i
        // Hi???n th??? form ????? th???c hi???n b?????c ti???p theo ??? OnPostConfirmationAsync
        ReturnUrl = returnUrl;
        ProviderDisplayName = info.ProviderDisplayName;
        if (info.Principal.HasClaim(c => c.Type == ClaimTypes.Email))
            // C?? th??ng tin v??? email t??? info, l???y email n??y hi???n th??? ??? Form
            Input = new InputModel
            {
                Email = info.Principal.FindFirstValue(ClaimTypes.Email)
            };

        return Page();
    }

    public async Task<IActionResult> OnPostConfirmationAsync(string returnUrl = null)
    {
        returnUrl = returnUrl ?? Url.Content("~/");
        // L???y l???i Info
        var info = await _signInManager.GetExternalLoginInfoAsync();
        if (info == null)
        {
            ErrorMessage = "Kh??ng c?? th??ng tin t??i kho???n ngo??i.";
            return RedirectToPage("./Login", new { ReturnUrl = returnUrl });
        }

        if (ModelState.IsValid)
        {
            string externalMail = null;
            if (info.Principal.HasClaim(c => c.Type == ClaimTypes.Email))
                externalMail = info.Principal.FindFirstValue(ClaimTypes.Email);

            var userWithexternalMail =
                externalMail != null ? await _userManager.FindByEmailAsync(externalMail) : null;

            // X??? l?? khi c?? th??ng tin v??? email t??? info, ?????ng th???i c?? user v???i email ????
            // Tr?????ng h???p n??y s??? th???c hi???n li??n k???t t??i kho???n ngo??i + x??c th???c email lu??n     
            if (userWithexternalMail != null && Input.Email == externalMail)
            {
                // x??c nh???n email lu??n n???u ch??a x??c nh???n
                if (!userWithexternalMail.EmailConfirmed)
                {
                    var codeactive = await _userManager.GenerateEmailConfirmationTokenAsync(userWithexternalMail);
                    await _userManager.ConfirmEmailAsync(userWithexternalMail, codeactive);
                }

                // Th???c hi???n li??n k???t info v?? user
                var resultAdd = await _userManager.AddLoginAsync(userWithexternalMail, info);
                if (resultAdd.Succeeded)
                {
                    // Th???c hi???n login    
                    await _signInManager.SignInAsync(userWithexternalMail, false);
                    return LocalRedirect(returnUrl);
                }
            }

            var firstName = info.Principal.Claims
                .Where(c => c.Type == ClaimTypes.Surname)
                .Select(c => c.Value)
                .SingleOrDefault();

            var lastName = info.Principal.Claims
                .Where(c => c.Type == ClaimTypes.GivenName)
                .Select(c => c.Value)
                .SingleOrDefault();

            var addr = new MailAddress(Input.Email);
            var userName = addr.User;

            // T??i kho???n ch??a c??, t???o t??i kho???n m???i
            var user = new User
            {
                UserName = userName,
                Email = Input.Email,
                FirstName = firstName ?? string.Empty,
                LastName = lastName ?? string.Empty,
                Birthday = DateTime.Now,
                CreateDate = DateTime.Now
            };
            var result = await _userManager.CreateAsync(user);
            if (result.Succeeded)
            {
                // Set default roles is Member for user
                await _userManager.AddToRoleAsync(user, "Member");

                // Li??n k???t t??i kho???n ngo??i v???i t??i kho???n v???a t???o
                result = await _userManager.AddLoginAsync(user, info);
                if (result.Succeeded)
                {
                    _logger.LogInformation("???? t???o user m???i t??? th??ng tin {Name}.", info.LoginProvider);

                    // Email t???o t??i kho???n v?? email t??? info gi???ng nhau -> x??c th???c email lu??n
                    if (user.Email == externalMail)
                    {
                        var codeactive = await _userManager.GenerateEmailConfirmationTokenAsync(user);
                        await _userManager.ConfirmEmailAsync(user, codeactive);
                        await _signInManager.SignInAsync(user, false, info.LoginProvider);
                        return LocalRedirect(returnUrl);
                    }

                    // Tr?????ng h???p n??y Email t???o User kh??c v???i Email t??? info (ho???c info kh??ng c?? email)
                    // s??? g???i email x??c ????? ng?????i d??ng x??c th???c r???i m???i c?? th??? ????ng nh???p
                    var userId = await _userManager.GetUserIdAsync(user);
                    var code = await _userManager.GenerateEmailConfirmationTokenAsync(user);
                    code = WebEncoders.Base64UrlEncode(Encoding.UTF8.GetBytes(code));
                    var callbackUrl = Url.Page(
                        "/Account/ConfirmEmail",
                        null,
                        new { area = "Identity", userId, code },
                        Request.Scheme);

                    await _emailSender.SendEmailAsync(Input.Email, "X??c nh???n ?????a ch??? email",
                        $"H??y x??c nh???n ?????a ch??? email b???ng c??ch <a href='{callbackUrl}'>b???m v??o ????y</a>.");

                    // Chuy???n ?????n trang th??ng b??o c???n k??ch ho???t t??i kho???n
                    if (_userManager.Options.SignIn.RequireConfirmedEmail)
                        return RedirectToPage("./RegisterConfirmation", new { Input.Email });

                    // ????ng nh???p ngay do kh??ng y??u c???u x??c nh???n email
                    await _signInManager.SignInAsync(user, false, info.LoginProvider);

                    return LocalRedirect(returnUrl);
                }
            }

            foreach (var error in result.Errors) ModelState.AddModelError(string.Empty, error.Description);
        }

        ProviderDisplayName = info.ProviderDisplayName;
        ReturnUrl = returnUrl;
        return Page();
    }

    private User CreateUser()
    {
        try
        {
            return Activator.CreateInstance<User>();
        }
        catch
        {
            throw new InvalidOperationException($"Can't create an instance of '{nameof(User)}'. " +
                                                $"Ensure that '{nameof(User)}' is not an abstract class and has a parameterless constructor, or alternatively " +
                                                "override the external login page in /Areas/Identity/Pages/Account/ExternalLogin.cshtml");
        }
    }

    private IUserEmailStore<User> GetEmailStore()
    {
        if (!_userManager.SupportsUserEmail)
            throw new NotSupportedException("The default UI requires a user store with email support.");

        return (IUserEmailStore<User>)_userStore;
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
        [Required]
        [EmailAddress]
        public string Email { get; set; }
    }
}