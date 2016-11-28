using Microsoft.AspNetCore.Authentication.Cookies;
using Microsoft.Extensions.DependencyInjection;
using Portfolio.Services;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Portfolio.Web.Helpers
{
    public static class LastChangedValidator
    {
        public static async Task ValidateAsync(CookieValidatePrincipalContext context)
        {
            // Pull database from registered DI services.
            var userService = context.HttpContext.RequestServices.GetRequiredService<IUserService>();
            var userPrincipal = context.Principal;

            // Look for the last changed claim.
            string lastChanged;
            lastChanged = (from c in userPrincipal.Claims
                           where c.Type == "Id"
                           select c.Value).FirstOrDefault();

            if (string.IsNullOrEmpty(lastChanged))
            {
                context.RejectPrincipal();
                await context.HttpContext.Authentication.SignOutAsync("Cookies");
            }
        }
    }
}
