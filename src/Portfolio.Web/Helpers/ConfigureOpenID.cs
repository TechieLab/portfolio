

using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Options;

namespace Store.Web.Helpers
{
    public static class ConfigureOpenID
    {
        public static void Configure(IApplicationBuilder app, IHostingEnvironment env, IOptions<Auth0Settings> auth0Settings)
        {
            var options = new OpenIdConnectOptions("Auth0")
            {
                // Set the authority to your Auth0 domain
                Authority = $"https://{auth0Settings.Value.Domain}",

                // Configure the Auth0 Client ID and Client Secret
                ClientId = auth0Settings.Value.ClientId,
                ClientSecret = auth0Settings.Value.ClientSecret,

                // Do not automatically authenticate and challenge
                AutomaticAuthenticate = false,
                AutomaticChallenge = false,

                // Set response type to code
                ResponseType = "code",

                // Set the callback path, so Auth0 will call back to http://localhost:5000/signin-auth0 
                // Also ensure that you have added the URL as an Allowed Callback URL in your Auth0 dashboard 
                CallbackPath = new PathString("/profile"),

                // Configure the Claims Issuer to be Auth0
                ClaimsIssuer = "Auth0"
            };

            options.Scope.Clear();
            options.Scope.Add("openid");

            app.UseOpenIdConnectAuthentication(options);
        }
    }
}
