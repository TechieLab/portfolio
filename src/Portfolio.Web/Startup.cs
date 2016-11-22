using Microsoft.AspNetCore.Authentication.Cookies;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Options;
using Porfolio.Web.Services;
using Portfolio.Core;
using Portfolio.Models;
using Portfolio.Services;
using Portfolio.Web.Helpers;
using Store.Web.Helpers;
using System;

namespace Portfolio.Web
{
    public class Startup
    {
        private IMongoDbManager _manager;
        public IConfiguration Configuration { get; set; }

        public Startup(IHostingEnvironment env)
        {
            var builder = new ConfigurationBuilder()
                .SetBasePath(env.ContentRootPath)
                .AddJsonFile("appsettings.json", optional: true, reloadOnChange: true)
                .AddJsonFile($"appsettings.{env.EnvironmentName}.json", optional: true)
                .AddEnvironmentVariables();

            Configuration = builder.Build();
        }


        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddIdentity<User, Role>()
                    .AddDefaultTokenProviders();

            services.Configure<IdentityOptions>(options =>
            {
                // Password settings
                options.Password.RequireDigit = true;
                options.Password.RequiredLength = 8;
                options.Password.RequireNonAlphanumeric = false;
                options.Password.RequireUppercase = true;
                options.Password.RequireLowercase = false;

                // Lockout settings
                options.Lockout.DefaultLockoutTimeSpan = TimeSpan.FromMinutes(30);
                options.Lockout.MaxFailedAccessAttempts = 10;

                // Cookie settings
                options.Cookies.ApplicationCookie.ExpireTimeSpan = TimeSpan.FromDays(150);
                options.Cookies.ApplicationCookie.LoginPath = "/logIn";
                options.Cookies.ApplicationCookie.LogoutPath = "/logOff";

                // User settings
                options.User.RequireUniqueEmail = true;
            });

            ServiceCollectionExtensions.RegisterServices(services, Configuration);
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IHostingEnvironment env, IOptions<Auth0Settings> auth0Settings, IOptions<LinkedInSettings> linkedInSettings,
            ILoggerFactory loggerFactory, 
            IMongoDbManager manager, 
            IUserService userService,
            ILinkedInService service,
            IProfileService profileService)
        {
            _manager = manager;

            loggerFactory.AddFile("logs/log.txt", LogLevel.Debug);
            loggerFactory.AddConsole(Configuration.GetSection("Logging"));
            loggerFactory.AddDebug();

            var logger = loggerFactory.CreateLogger("Configure Endpoint");
            logger.LogDebug("Server Configured......");

            //app.UseIISPlatformHandler();
            app.UseIdentity();

            app.UseCookieAuthentication(new CookieAuthenticationOptions
            {
                AuthenticationScheme = "Cookies",
                LoginPath = new PathString("/login"),
                AccessDeniedPath = new PathString("/logout"),
                CookieName = "auth-token",
                AutomaticAuthenticate = true,
                AutomaticChallenge = true,
                Events = new CookieAuthenticationEvents
                {
                    // Set other options
                    OnValidatePrincipal = LastChangedValidator.ValidateAsync
                }
            });

            //ConfigureOpenID.Configure(app, env, auth0Settings);

            // Used to register OAuth for linkedIn.
            new ConfigureOAuth(service).Register(app, env, linkedInSettings);

            new ConfigureApplication(Configuration).Register(app, env);                                             

            new DatabaseInitService(userService, profileService, null).ValidateData();
        }
    }
}
