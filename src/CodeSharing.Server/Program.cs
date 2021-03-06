using CodeSharing.Server.Datas.Entities;
using CodeSharing.Server.Datas.Initialize;
using CodeSharing.Server.Datas.Provider;
using CodeSharing.Server.Extensions;
using CodeSharing.Server.IdentityServer;
using CodeSharing.Server.Services;
using CodeSharing.Server.Services.Interfaces;
using CodeSharing.ViewModels.Commons;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.UI.Services;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.OpenApi.Models;
using Serilog;

var builder = WebApplication.CreateBuilder(args);

var configuration = builder.Configuration;

// Add services to the container.

// Define origin
var CodeSharingSpecificOrigins = "CodeSharingSpecificOrigins";

// Setup serilog to console
builder.Host.UseSerilog((hostingContext, loggerConfiguration) =>
    loggerConfiguration.ReadFrom.Configuration(hostingContext.Configuration));

// Setup Entity Framework
builder.Services.AddDbContextPool<ApplicationDbContext>(
    options => options.UseSqlServer(builder.Configuration.GetConnectionString("DefaultConnection")));

// Setup Identity
builder.Services.AddIdentity<User, IdentityRole>()
    .AddEntityFrameworkStores<ApplicationDbContext>();

builder.Services.AddIdentityServer(options =>
    {
        options.Events.RaiseErrorEvents = true;
        options.Events.RaiseInformationEvents = true;
        options.Events.RaiseFailureEvents = true;
        options.Events.RaiseSuccessEvents = true;
    })
    .AddInMemoryApiResources(Config.Apis)
    .AddInMemoryClients(builder.Configuration.GetSection("IdentityServer:Clients"))
    .AddInMemoryIdentityResources(Config.Ids)
    .AddInMemoryApiScopes(Config.ApiScopes)
    .AddAspNetIdentity<User>()
    .AddProfileService<IdentityProfileService>()
    .AddDeveloperSigningCredential();

// Setup CORS (Cross Orgin Resouces)
builder.Services.AddCors(options =>
{
    options.AddPolicy(CodeSharingSpecificOrigins,
        corsPolicyBuilder =>
        {
            corsPolicyBuilder.WithOrigins(configuration["AllowOrigins"])
                .AllowAnyHeader()
                .AllowAnyMethod()
                .AllowCredentials();
        });
});

builder.Services.Configure<IdentityOptions>(options =>
{
    // Default Lockout settings.
    options.Lockout.DefaultLockoutTimeSpan = TimeSpan.FromMinutes(2); // Kh??a t??i kho???n 2 ph??t n???u ????ng nh???p sai
    options.Lockout.MaxFailedAccessAttempts = 5; // Th???t b???i 3 l???n th?? kh??a
    options.Lockout.AllowedForNewUsers = true;
    options.SignIn.RequireConfirmedPhoneNumber = false;
    options.SignIn.RequireConfirmedAccount = false;
    options.SignIn.RequireConfirmedEmail = false;
    options.Password.RequiredLength = 8;
    options.Password.RequireDigit = true;
    options.Password.RequireUppercase = true;
    options.User.RequireUniqueEmail = true;
});

builder.Services.Configure<ApiBehaviorOptions>(options => { options.SuppressModelStateInvalidFilter = true; });

// Setup token when reset password using identity
builder.Services.AddIdentityCore<User>(options => options.SignIn.RequireConfirmedAccount = true)
    .AddEntityFrameworkStores<ApplicationDbContext>()
    .AddTokenProvider<DataProtectorTokenProvider<User>>(TokenOptions.DefaultProvider);

builder.Services.AddControllersWithViews();

// Add more external login
builder.Services.AddAuthentication()
    .AddLocalApi("Bearer", option => { option.ExpectedScope = "api.codesharing"; })
    .AddGoogle(googleOptions =>
    {
        // Read authentication google information from appsettings.xxx.json
        IConfiguration googleAuthSection = configuration.GetSection("Authentication:Google");

        // Establish Client Id and Client Secret allow access API google
        googleOptions.ClientId = googleAuthSection["ClientId"];
        googleOptions.ClientSecret = googleAuthSection["ClientSecret"];

        // Config callback url from google ( default callback url: /signin-google )
        googleOptions.CallbackPath = "/dang-nhap-tu-google";
    })
    .AddFacebook(facebookOptions =>
    {
        // Read authentication google information from appsettings.xxx.json
        IConfiguration facebookAuthSection = configuration.GetSection("Authentication:Facebook");

        // Establish Client Id and Client Secret allow access API google
        facebookOptions.ClientId = facebookAuthSection["ClientId"];
        facebookOptions.ClientSecret = facebookAuthSection["ClientSecret"];

        // Config callback url from google ( default callback url: /signin-google )
        facebookOptions.CallbackPath = "/dang-nhap-tu-facebook";
    });

builder.Services.AddAuthorization(options =>
{
    options.AddPolicy("Bearer", policy =>
    {
        policy.AddAuthenticationSchemes("Bearer");
        policy.RequireAuthenticatedUser();
    });
});

builder.Services.AddRazorPages(options =>
{
    options.Conventions.AddAreaFolderRouteModelConvention("Identity", "/Account/", model =>
    {
        foreach (var selector in model.Selectors)
        {
            var attributeRouteModel = selector.AttributeRouteModel;
            if (attributeRouteModel == null)
                continue;

            attributeRouteModel.Order = -1;
            attributeRouteModel.Template = attributeRouteModel.Template?.Remove(0, "Identity".Length);
        }
    });
});

// Add DbInitializer using Seeding data
builder.Services.AddTransient<DbInitializer>();

// Config use options
builder.Services.AddOptions();

// Register in Identity require have EmailSender
builder.Services.AddTransient<IEmailSender, EmailSenderService>();
builder.Services.AddTransient<ISequenceService, SequenceService>();
builder.Services.AddTransient<IStorageService, FileStorageService>();
builder.Services.AddTransient<ICacheService, DistributedCacheService>();
builder.Services.Configure<MailSettings>(configuration.GetSection("MailSettings"));
builder.Services.AddTransient<IViewRenderService, ViewRenderService>();

// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen(c =>
{
    c.SwaggerDoc("v1", new OpenApiInfo { Title = "CodeSharing API", Version = "v1" });

    c.AddSecurityDefinition("Bearer", new OpenApiSecurityScheme
    {
        Type = SecuritySchemeType.OAuth2,
        Flows = new OpenApiOAuthFlows
        {
            Implicit = new OpenApiOAuthFlow
            {
                AuthorizationUrl = new Uri("https://localhost:5000/connect/authorize"),
                Scopes = new Dictionary<string, string> { { "api.codesharing", "CodeSharing API" } }
            }
        }
    });
    c.AddSecurityRequirement(new OpenApiSecurityRequirement
    {
        {
            new OpenApiSecurityScheme
            {
                Reference = new OpenApiReference { Type = ReferenceType.SecurityScheme, Id = "Bearer" }
            },
            new List<string> { "api.codesharing" }
        }
    });
});

// Config Distributed Cache
builder.Services.AddDistributedSqlServerCache(o =>
{
    o.ConnectionString = configuration.GetConnectionString("DefaultConnection");
    o.SchemaName = "dbo";
    o.TableName = "CacheTable";
});

var enviroment = Environment.GetEnvironmentVariable("ASPNETCORE_ENVIRONMENT");
if (enviroment == Environments.Development) builder.Services.AddRazorPages().AddRazorRuntimeCompilation();

var app = builder.Build();

#region Serilog

Log.Logger = new LoggerConfiguration()
    .Enrich.FromLogContext()
    .WriteTo.Console()
    .CreateLogger();

using (var scope = app.Services.CreateScope())
{
    var services = scope.ServiceProvider;
    try
    {
        Log.Information("Seeding data...");
        var dbInitializer = services.GetService<DbInitializer>();
        dbInitializer?.Seed().Wait();
    }
    catch (Exception e)
    {
        var logger = services.GetRequiredService<ILogger<Program>>();
        logger.LogError(e, "An error occured while seeding the database");
    }
}

#endregion Serilog

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI(c =>
    {
        c.OAuthClientId("swagger");
        c.SwaggerEndpoint("/swagger/v1/swagger.json", "CodeSharing API V1");
    });
    app.UseDeveloperExceptionPage();
}
else
{
    // Security Headers ( before UseStaticFiles() )
    app.UseHsts(hsts => hsts.MaxAge(365).IncludeSubdomains().Preload());
    app.UseXContentTypeOptions();
    app.UseReferrerPolicy(opts => opts.NoReferrer());
    app.UseXXssProtection(options => options.EnabledWithBlockMode());
    app.UseXfo(options => options.Deny());
}

app.UseErrorWrapping();

app.UseStaticFiles();

app.UseIdentityServer();

app.UseAuthentication();

app.UseHttpsRedirection();

app.UseRouting();

app.UseAuthorization();

app.UseCors(CodeSharingSpecificOrigins);

app.UseEndpoints(endpoints =>
{
    endpoints.MapDefaultControllerRoute();
    endpoints.MapRazorPages();
});

app.Run();