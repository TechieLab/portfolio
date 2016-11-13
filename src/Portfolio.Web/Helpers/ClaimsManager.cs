using Microsoft.Extensions.Logging;
using Portfolio.DAL.Impl;
using Portfolio.Web.Helpers;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Threading;
using System.Threading.Tasks;

namespace Store.Web.Helpers
{
    public class ClaimsManager
    {
        private ILogger _logger { get; } = ApplicationLogging.CreateLogger<ClaimsManager>();
        
        public void SetUserContext()
        {
            try
            {
                var principal = Thread.CurrentPrincipal as ClaimsPrincipal;

                if (principal == null)
                {
                    if (_logger.IsEnabled(LogLevel.Debug))
                    {
                        _logger.LogDebug("System.Threading.Thread.CurrentPrincipal is null");
                    }
                    return;
                }

                var logonName = principal.Identity.Name;

                if (string.IsNullOrWhiteSpace(logonName))
                {
                    if (_logger.IsEnabled(LogLevel.Debug))
                    {
                        _logger.LogDebug("MTXUserName claim not set for the current principal....");
                    }
                    return;
                }

                if (_logger.IsEnabled(LogLevel.Debug))
                {
                    _logger.LogDebug("Setting the ClaimsPrincipal for logonName [{0}]", logonName);
                }

                using (var userRepository = new UserRepository())
                {
                    var user = userRepository.GetBy(u => u.UserName == logonName).FirstOrDefault();

                    var claims = new List<Claim>
                                    {
                                        new Claim(Portfolio.Core.Security.SecurityClaimTypes.UserId, user.Id.ToString()),
                                        new Claim(Portfolio.Core.Security.SecurityClaimTypes.UserFullName, user.Name),
                                        new Claim(Portfolio.Core.Security.SecurityClaimTypes.PageSize, !string.IsNullOrEmpty(user.PageSize.ToString()) ? user.PageSize.ToString() : "20"),
                                        new Claim(Portfolio.Core.Security.SecurityClaimTypes.TimeOut, !string.IsNullOrEmpty(user.Timeout.ToString()) ?user.Timeout.ToString() : "30" )
                                    };

                    principal.AddIdentity(new ClaimsIdentity(claims));
                }
            }
            catch (Exception exp)
            {
                if (_logger.IsEnabled(LogLevel.Error))
                {
                    _logger.LogError("Error in OnPostAuthenticateRequest for user [{0}] EXP [{1}]",
                                    Thread.CurrentPrincipal == null
                                        ? "No User Found"
                                        : Thread.CurrentPrincipal.Identity.Name, exp);
                }
            }
        }
    }
}
