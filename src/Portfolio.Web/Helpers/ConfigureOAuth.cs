using Microsoft.AspNetCore.Authentication.OAuth;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Options;
using Newtonsoft.Json;
using Portfolio.Services;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Threading;
using Portfolio.Core.Security;
using System.Collections.Generic;
using System.Security.Claims;

namespace Portfolio.Web.Helpers
{
    public class ConfigureOAuth
    {
        private readonly ILinkedInService _service;

        public ConfigureOAuth(ILinkedInService service)
        {
            _service = service;
        }

        public void Register(IApplicationBuilder app, IHostingEnvironment env, IOptions<LinkedInSettings> linkedInSettings)
        {
            // Add the OAuth2 middleware
            app.UseOAuthAuthentication(new OAuthOptions
            {
                // We need to specify an Authentication Scheme
                AuthenticationScheme = "LinkedIn",

                ClaimsIssuer = "OAuth2-LinkedIn",

                // Configure the LinkedIn Client ID and Client Secret
                ClientId = linkedInSettings.Value.ClientId,
                ClientSecret = linkedInSettings.Value.ClientSecret,

                // Set the callback path, so LinkedIn will call back to http://APP_URL/signin-linkedin
                // Also ensure that you have added the URL as an Authorized Redirect URL in your LinkedIn application
                CallbackPath = new PathString(linkedInSettings.Value.CallbackUrl),

                // Configure the LinkedIn endpoints                
                AuthorizationEndpoint = linkedInSettings.Value.AuthorizationEndpoint,
                TokenEndpoint = linkedInSettings.Value.TokenEndpoint,
                UserInformationEndpoint = linkedInSettings.Value.UserInformationEndpoint,

                Scope = { "r_basicprofile", "r_emailaddress" },

                Events = new OAuthEvents
                {
                    // The OnCreatingTicket event is called after the user has been authenticated and the OAuth middleware has
                    // created an auth ticket. We need to manually call the UserInformationEndpoint to retrieve the user's information,
                    // parse the resulting JSON to extract the relevant information, and add the correct claims.
                    OnCreatingTicket = async context =>
                    {

                        var request = new HttpRequestMessage(HttpMethod.Get, context.Options.UserInformationEndpoint);
                        request.Headers.Authorization = new AuthenticationHeaderValue("Bearer", context.AccessToken);
                        request.Headers.Add("x-li-format", "json"); // Tell LinkedIn we want the result in JSON, otherwise it will return XML

                        var response = await context.Backchannel.SendAsync(request, context.HttpContext.RequestAborted);
                        response.EnsureSuccessStatusCode();


                       

                        var myObject = new Models.LinkedIn.Profile();
                        JsonConvert.PopulateObject(await response.Content.ReadAsStringAsync(), myObject);

                        if (myObject != null)
                        {
                            var userId = myObject.id;
                            if (!string.IsNullOrEmpty(userId))
                            {                                 
                                var claims = new List<Claim>
                                    {
                                        new Claim(Core.Security.SecurityClaimTypes.UserId, myObject.id.ToString()),
                                        new Claim(Core.Security.SecurityClaimTypes.UserFullName, myObject.firstName + ' ' + myObject.lastName ),
                                        new Claim(Core.Security.SecurityClaimTypes.UserEmail, myObject.emailAddress)
                                    };

                                context.Identity.AddClaims(claims);

                                var profile = _service.RetriveLinkedInProfile(myObject.emailAddress);

                                if (profile == null)
                                {
                                    _service.SaveLinkedInInfo(myObject);
                                }
                            }    
                        }
                    }
                }
            });
        }
    }
}
