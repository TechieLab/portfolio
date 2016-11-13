using Microsoft.AspNetCore.Authentication.Cookies;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Http.Authentication;
using Microsoft.Extensions.Configuration;
using System.Reflection.Metadata;
using System.IO;
using Microsoft.Extensions.FileProviders;
using Microsoft.Extensions.Logging;
using Portfolio.Web.Helpers;

namespace Store.Web.Helpers
{
    public class ConfigureApplication
    {
        private ILogger _logger { get; } =  ApplicationLogging.CreateLogger<ConfigureApplication>();
        private IConfiguration Configuration { get; set; }

        public ConfigureApplication(IConfiguration _configuration)
        {
            Configuration = _configuration;
        }

        public void Register(IApplicationBuilder app, IHostingEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();

                app.UseBrowserLink();
            }
            else
            {
                app.UseExceptionHandler("/Home/Error");
            }

            // Listen for requests on the /login path, and issue a challenge to log in with the LinkedIn middleware
            app.Map("/external-login", builder =>
            {                
                builder.Run(async context =>
                {
                    _logger.LogDebug("using external-loging");

                    // Return a challenge to invoke the LinkedIn authentication scheme
                    await context.Authentication.ChallengeAsync("LinkedIn", properties: new AuthenticationProperties() { RedirectUri = "/profile/manage" });
                });
            });

            // Listen for requests on the /logout path, and sign the user out
            app.Map("/logout", builder =>
            {
                builder.Run(async context =>
                {
                    // Sign the user out of the authentication middleware (i.e. it will clear the Auth cookie)
                    await context.Authentication.SignOutAsync(CookieAuthenticationDefaults.AuthenticationScheme);

                    // Redirect the user to the home page after signing out
                    context.Response.Redirect("/");
                });
            });

            // Route all unknown requests to app root
            app.Use(async (context, next) =>
            {
                await next();
                _logger.LogDebug("unknown requests....................");

                // If there's no available file and the request doesn't contain an extension, we're probably trying to access a page.
                // Rewrite request to use app root
                if (context.Response.StatusCode == 404 && !Path.HasExtension(context.Request.Path.Value))
                {
                    context.Request.Path = "/index.html"; // Put your Angular root page here 
                    context.Response.StatusCode = 200; // Make sure we update the status code, otherwise it returns 404
                    await next();
                }
            });

            // Serve wwwroot as root
            app.UseFileServer();
            app.UseDefaultFiles();
            app.UseStaticFiles();
            ///app.UseMvcWithDefaultRoute();
            app.UseMvc();            
        }
    }
}
