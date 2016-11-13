

using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Options;
using Microsoft.IdentityModel.Tokens;
using Portfolio.Core.Security;
using Portfolio.Web.Helpers;
using System;

namespace Store.Web.Helpers
{
    public class ConfigureOpenID
    {
        private ILogger _logger { get; } = ApplicationLogging.CreateLogger<ConfigureOpenID>();

        public static void Configure(IApplicationBuilder app, IHostingEnvironment env, IOptions<Auth0Settings> auth0Settings)
        {
            var keyAsBase64 = auth0Settings.Value.ClientSecret.Replace('_', '/').Replace('-', '+');
            var keyAsBytes = Convert.FromBase64String(keyAsBase64);

            var options = new OpenIdConnectOptions("Auth0")
            {
                AuthenticationScheme = "Auth0",

                // Set the authority to your Auth0 domain
                Authority = $"https://{auth0Settings.Value.Domain}",
                SignInScheme = "Cookies",

                // Configure the Auth0 Client ID and Client Secret
                ClientId = auth0Settings.Value.ClientId,
                ClientSecret = auth0Settings.Value.ClientSecret,

                // Do not automatically authenticate and challenge
                AutomaticAuthenticate = false,
                AutomaticChallenge = false,

                // Set response type to code
                ResponseType = "code id_token",

                // Set the callback path, so Auth0 will call back to http://localhost:5000/signin-auth0 
                // Also ensure that you have added the URL as an Allowed Callback URL in your Auth0 dashboard 
                CallbackPath = new PathString(auth0Settings.Value.CallbackUrl),

                // Configure the Claims Issuer to be Auth0
                ClaimsIssuer = "Auth0",

                GetClaimsFromUserInfoEndpoint = true,
                SaveTokens = true
            };

            options.TokenValidationParameters = new TokenValidationParameters()
            {
                RequireExpirationTime = true,
                RequireSignedTokens = true,
                RoleClaimType = SecurityClaimTypes.UserRole,
                NameClaimType = SecurityClaimTypes.UserName,

                ValidateActor = true,
                ValidateAudience = false,
                ValidateIssuer = true,
                ValidateLifetime = false,
                ValidateIssuerSigningKey = true,

                IssuerSigningKey = new SymmetricSecurityKey(keyAsBytes)
            };

            options.Scope.Clear();
            options.Scope.Add("openid");

            app.UseOpenIdConnectAuthentication(options);
        }
    }
}
