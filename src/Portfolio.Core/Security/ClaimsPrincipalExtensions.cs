using System;
using System.Linq;
using System.Security.Claims;
using System.Security.Principal;

namespace Portfolio.Core.Security
{
    /// <summary>
    /// Defines extension methods on <c>System.Security.Claims.ClaimsPrincipal</c> class to get Portfolio specific
    /// claims.
    /// </summary>
    public static class ClaimsPrincipalExtensions
    {      
 
        /// <summary>
        /// Gets the <see cref="T:Portfolio.Models.User">UserId</see> of the user identified by the <paramref name="principal"/>.
        /// </summary>
        /// <param name="principal">The principal whose Portfolio <c>UserId</c> is to be returned.</param>
        /// <returns>
        /// <see cref="T:Portfolio.Models.User">UserId</see> represented by the current user.
        /// </returns>
        /// <remarks>
        /// The value returned is essentially <c>USERS.USER_ID</c>.
        /// </remarks>
        /// <exception cref="T:System.ArgumentNullException">
        /// Thrown if <paramref name="principal"/> is <c>null</c>.
        /// </exception>
        /// <exception cref="T:Portfolio.Security.ClaimNotFoundException">
        /// Thrown if <see cref="F:CAMP.Security.ClaimTypes.UserId">PortfolioUserId</see> claim is not found.
        /// </exception>
        /// <seealso cref="F:CAMP.Security.ClaimTypes.UserId"/>
        public static string GetUserId(this IPrincipal principal)
        {
            if (principal == null) throw new ArgumentNullException("principal");
            var claimsPrincipal = principal as ClaimsPrincipal;
            if (claimsPrincipal == null)
            {
                throw new ArgumentException("principal is not a ClaimsPrincipal: " + principal, "principal");
            }

            var identities = claimsPrincipal.Identities.FirstOrDefault(i => i.AuthenticationType != "Forms");

            if (identities == null)
            {
                throw new ArgumentException("identities is not a ClaimsIdentity: " + identities, "principal");
            }

            Claim userIdClaim = identities.Claims.FirstOrDefault(c => c.Type == "Id");
           // Claim userIdClaim = claimsPrincipal.Current.FindFirst(ClaimTypes.UserId);

            if (userIdClaim != null)
            {
                //if (log.IsDebugEnabled)
                //{
                //    log.DebugFormat("UserId found in claim [{0}]", userIdClaim);
                //}
                return userIdClaim.Value;
            }
            string principalName = null;
            if (principal.Identity != null)
            {
                principalName = principal.Identity.Name;
            }
            throw new ClaimNotFoundException(string.Format("UserId claim not found in principal with Name={0}", principalName));
        }

        public static int GetUserPageSize(this IPrincipal principal)
        {
            if (principal == null) throw new ArgumentNullException("principal");
            var claimsPrincipal = principal as ClaimsPrincipal;
            if (claimsPrincipal == null)
            {
                throw new ArgumentException("principal is not a ClaimsPrincipal: " + principal, "principal");
            }

            var identities = claimsPrincipal.Identities.FirstOrDefault(i => i.AuthenticationType != "Forms");

            if (identities == null)
            {
                throw new ArgumentException("identities is not a ClaimsIdentity: " + identities, "principal");
            }           

            Claim pageSizeClaim = identities.Claims.FirstOrDefault(c => c.Type == "PageSize");
            // Claim userIdClaim = claimsPrincipal.Current.FindFirst(ClaimTypes.UserId);

            if (pageSizeClaim != null)
            {
                //if (log.IsDebugEnabled)
                //{
                //    log.DebugFormat("PageSize found in claim [{0}]", pageSizeClaim);
                //}
                return Convert.ToInt32(pageSizeClaim.Value);
            }
            string principalName = null;
            if (principal.Identity != null)
            {
                principalName = principal.Identity.Name;
            }
            throw new ClaimNotFoundException(string.Format("pageSizeClaim claim not found in principal with Name={0}", principalName));
        }
    }
}
