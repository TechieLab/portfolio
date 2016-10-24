using Microsoft.Extensions.Logging;
using System;

namespace Portfolio.Web.Helpers
{
    public static class AuthenticationHelper
    {
        private static readonly ILogger _logger;
               
        public static void SetAuthenticationCookie(string userName, int timeOut)
        {
            if (string.IsNullOrWhiteSpace(userName))
            {
                throw new ArgumentException("value must be specified", "userName");
            }

            if (timeOut == 0)
            {
                throw new ArgumentException("value must be specified", "timeOut");
            }

            try
            {
                if (_logger.IsEnabled(LogLevel.Debug))
                {
                    _logger.LogDebug("SetAuthenticationCookie for UserName:[{0}]", userName);
                }                

                if (_logger.IsEnabled(LogLevel.Debug))
                {
                    _logger.LogDebug("Authentication cookie added succesfully.");
                }
            }
            catch (Exception ex)
            {
                if (_logger.IsEnabled(LogLevel.Debug))
                {
                    _logger.LogDebug("Error while adding authentication cookie for user: [{0}]. {1}", userName, ex);
                }
                throw new ApplicationException(
                    string.Format("Error while adding authentication cookie for user: [{0}]", userName), ex);
            }
        }

       }
}