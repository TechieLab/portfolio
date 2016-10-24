using Newtonsoft.Json;

namespace Portfolio.ViewModels
{
    public class LoginModel
    {
        [JsonProperty("@userName")]
        public string UserName { get; set; }

        [JsonProperty("@email")]
        public string Email { get; set; }

        [JsonProperty("@password")]
        public string Password { get; set; }

        [JsonProperty("@rememberMe")]
        public bool RememberMe { get; set; }
    }
}
