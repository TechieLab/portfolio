namespace Portfolio.Core.Security
{
    /// <summary>
    /// Used to store the authenticated result
    /// </summary>
    public class AuthenticationResult
    {
        /// <summary>
        /// Stores the status of the user.
        /// </summary>
        //public AccountStatus AccountStatus { get; set; }

        /// <summary>
        /// true if user is authenticated otherwise false.
        /// </summary>
        public bool Success { get; set; }

        /// <summary>
        /// The failure message to be displayed on screen
        /// </summary>
        public string FailureMessage { get; set; }
    }

}
