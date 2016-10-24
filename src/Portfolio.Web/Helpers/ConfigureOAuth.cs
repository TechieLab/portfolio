using Microsoft.AspNetCore.Authentication.OAuth;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Configuration;
using Newtonsoft.Json.Linq;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Security.Claims;
using System.Threading.Tasks;

namespace Store.Web.Helpers
{
    public class ConfigureOAuth
    {      

        public IConfiguration Configuration { get; set; }

        public ConfigureOAuth(IConfiguration _configuration)
        {
            Configuration = _configuration;
        }

        public void Register(IApplicationBuilder app, IHostingEnvironment env)
        {
            
            // Add the OAuth2 middleware
            app.UseOAuthAuthentication(new OAuthOptions
            {
                // We need to specify an Authentication Scheme
                AuthenticationScheme = "LinkedIn",

                // Configure the LinkedIn Client ID and Client Secret
                ClientId = Configuration["linkedin:clientId"],
                ClientSecret = Configuration["linkedin:clientSecret"],

                // Set the callback path, so LinkedIn will call back to http://APP_URL/signin-linkedin
                // Also ensure that you have added the URL as an Authorized Redirect URL in your LinkedIn application
                CallbackPath = new PathString("/"),

                // Configure the LinkedIn endpoints                
                AuthorizationEndpoint = Configuration["linkedin:authorizationEndpoint"],
                TokenEndpoint = Configuration["linkedin:tokenEndpoint"],
                UserInformationEndpoint = Configuration["linkedin:userInformationEndpoint"],

                Scope = { "r_basicprofile", "r_emailaddress" },

                Events = new OAuthEvents
                {
                    // The OnCreatingTicket event is called after the user has been authenticated and the OAuth middleware has
                    // created an auth ticket. We need to manually call the UserInformationEndpoint to retrieve the user's information,
                    // parse the resulting JSON to extract the relevant information, and add the correct claims.
                    OnCreatingTicket = async context =>
                    {
                        // Retrieve user info
                        var request = new HttpRequestMessage(HttpMethod.Get, context.Options.UserInformationEndpoint);
                        request.Headers.Authorization = new AuthenticationHeaderValue("Bearer", context.AccessToken);
                        request.Headers.Add("x-li-format", "json"); // Tell LinkedIn we want the result in JSON, otherwise it will return XML

                        var response = await context.Backchannel.SendAsync(request, context.HttpContext.RequestAborted);
                        response.EnsureSuccessStatusCode();

                        // Extract the user info object
                        var user = JObject.Parse(await response.Content.ReadAsStringAsync());

                        // Add the Name Identifier claim
                        var userId = user.Value<string>("id");
                        if (!string.IsNullOrEmpty(userId))
                        {
                            context.Identity.AddClaim(new Claim(ClaimTypes.NameIdentifier, userId, ClaimValueTypes.String, context.Options.ClaimsIssuer));
                        }

                        // Add the Name claim
                        var formattedName = user.Value<string>("formattedName");
                        if (!string.IsNullOrEmpty(formattedName))
                        {
                            context.Identity.AddClaim(new Claim(ClaimTypes.Name, formattedName, ClaimValueTypes.String, context.Options.ClaimsIssuer));
                        }

                        // Add the email address claim
                        var email = user.Value<string>("emailAddress");
                        if (!string.IsNullOrEmpty(email))
                        {
                            context.Identity.AddClaim(new Claim(ClaimTypes.Email, email, ClaimValueTypes.String,
                                context.Options.ClaimsIssuer));
                        }

                        // Add the Profile Picture claim
                        var pictureUrl = user.Value<string>("pictureUrl");
                        if (!string.IsNullOrEmpty(email))
                        {
                            context.Identity.AddClaim(new Claim("profile-picture", pictureUrl, ClaimValueTypes.String,
                                context.Options.ClaimsIssuer));
                        }
                    }
                }
            });                       
        }
    }
}
