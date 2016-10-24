

using System.ComponentModel;

namespace Portfolio.ViewModels
{

    public enum MessageType
    {
        [Description("Invalid Username Or Password")]
        InvalidUsernameOrPassword,

        [Description("Successfully LoggedIn")]
        SuccessfullyLoggedIn,

        [Description("Logged off successfully")]
        LoggedOffSuccessfully,

        [Description("User Created Successfully")]
        UserCreatedSuccessfully,

        [Description("User already exists")]
        UserAlreadyExists,

        [Description("Customer updated successfully")]
        CustomerUpdatedSuccessfully
    }

}
