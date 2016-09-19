namespace Portfolio.Core.Security
{
    /// <summary>
    /// Defines type of the claim.
    /// </summary>
    public class ClaimTypes
    {
        ///// <summary>
        ///// Identifies the ID of the MTX user
        ///// </summary>
        public const string UserId = "Id";

        ///// <summary>
        ///// Identifies  the Name of the User 
        ///// </summary>
        public const string UserName = System.Security.Claims.ClaimTypes.Name;

        ///// <summary>
        ///// Identifies the role of the MTX user
        ///// </summary>
        public const string UserRole = System.Security.Claims.ClaimTypes.Role;

        ///// <summary>
        ///// Identifies the Email of the user.
        ///// </summary>
        public const string UserEmail = System.Security.Claims.ClaimTypes.Email;

        ///// <summary>
        ///// The full name of the User
        ///// </summary>
        public const string UserFullName = System.Security.Claims.ClaimTypes.GivenName;

       /// <summary>
        /// Auto Refresh Time
        /// </summary>
        public const string AutoRefreshRate = "AutoRefreshRate";

        /// <summary>
        /// Page Size
        /// </summary>
        public const string PageSize = "PageSize";

        /// <summary>
        /// User session Time Out value
        /// </summary>
        public const string TimeOut = "TimeOut";
    }
}