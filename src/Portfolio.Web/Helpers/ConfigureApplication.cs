using Microsoft.AspNetCore.Authentication.Cookies;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Http.Authentication;
using Microsoft.Extensions.Configuration;
using System.Reflection.Metadata;
using System.IO;

namespace Store.Web.Helpers
{
    public class ConfigureApplication
    {
        public Microsoft.Extensions.Configuration.IConfiguration Configuration { get; set; }

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

            app.UseCookieAuthentication(new CookieAuthenticationOptions
            {
                AutomaticAuthenticate = true,
                AutomaticChallenge = true,
                LoginPath = new PathString("/login"),
                LogoutPath = new PathString("/logout")
            });

           

            app.UseDefaultFiles();
            app.UseStaticFiles();
            app.UseMvcWithDefaultRoute();
            app.UseMvc();
                        
            app.Use(async (context, next) =>
            {
                await next();

                if (context.Response.StatusCode == 404)
                {
                    context.Request.Path = "/index.html"; // Put your Angular root page here 
                    await next();
                }
            });

            // Used to register OAuth for linkedIn.
           // new ConfigureOAuth(Configuration).Register(app, env);
           
        /*
            // Listen for requests on the /login path, and issue a challenge to log in with the LinkedIn middleware
            app.Map("/login", builder =>
            {
                builder.Run(async context =>
                {
                    // Return a challenge to invoke the LinkedIn authentication scheme
                    await context.Authentication.ChallengeAsync("Auth0", properties: new AuthenticationProperties() { RedirectUri = "/" });
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
       */
        }
    }
}
