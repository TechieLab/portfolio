using System;
using Microsoft.AspNetCore.Mvc;
using Portfolio.Services;
using Microsoft.Extensions.Logging;
using Portfolio.ViewModels;
using Microsoft.AspNetCore.Http.Authentication;
using Microsoft.AspNetCore.Authentication.Cookies;
using Portfolio.Web.Helpers;
using DomainModels = Portfolio.Models;
using AutoMapper;
using Store.Web.Helpers;
using System.Collections.Generic;
using System.Security.Claims;
using System.Threading.Tasks;

// For more information on enabling Web API for empty projects, visit http://go.microsoft.com/fwlink/?LinkID=397860

namespace Portfolio.Web.Controllers
{
    [Route("api/account")]
    public class AccountController : Controller
    {
        private readonly IAccountService _accountService;
        private ILogger _logger { get; } = ApplicationLogging.CreateLogger<AccountController>();
        
        public AccountController(IAccountService accountService)
        {
            _accountService = accountService;
        }

        [HttpGet("login")]
        public IActionResult Login()
        {
            return new ChallengeResult("Auth0", new AuthenticationProperties() { RedirectUri = "/" });
        }

        [HttpGet("logout")]
        public IActionResult Logout()
        {
            HttpContext.Authentication.SignOutAsync("Auth0");
            HttpContext.Authentication.SignOutAsync(CookieAuthenticationDefaults.AuthenticationScheme);

            return RedirectPermanent("/login");
        }

        // POST api/values
        [HttpPost("authenticate")]
        public async Task<Result> Post(LoginModel loginModel)
        {
            if (loginModel == null)
                throw new ArgumentNullException("Form value can not be null");

            if (ModelState.IsValid)
            {
                var username = loginModel.UserName;
                var password = loginModel.Password;

                var user = _accountService.Authenticate(loginModel.UserName, loginModel.Password);

                if (user == null)
                {
                    return new Result
                    {
                        Success = false,
                        Message = MessageType.InvalidUsernameOrPassword.ToString()
                    };
                }
                else
                {
                    var claims = new List<Claim>
                                    {
                                        new Claim(Core.Security.SecurityClaimTypes.UserId, user.Id.ToString()),
                                        new Claim(Core.Security.SecurityClaimTypes.UserFullName, user.Name),
                                        new Claim(Core.Security.SecurityClaimTypes.UserEmail, user.EmailId),
                                        new Claim(Core.Security.SecurityClaimTypes.PageSize, !string.IsNullOrEmpty(user.PageSize.ToString()) ? user.PageSize.ToString() : "20"),
                                        new Claim(Core.Security.SecurityClaimTypes.TimeOut, !string.IsNullOrEmpty(user.Timeout.ToString()) ?user.Timeout.ToString() : "30" )
                                    };
                    var userIdentity = new ClaimsIdentity(claims, "Forms");

                    var userPrincipal = new ClaimsPrincipal(userIdentity);

                    await HttpContext.Authentication.SignInAsync("Cookies", userPrincipal,
                    new AuthenticationProperties
                    {
                        ExpiresUtc = DateTime.UtcNow.AddMinutes(20),
                        IsPersistent = false,
                        AllowRefresh = false
                    });
                }

                return new Result
                {
                    Success = true,
                    Message = MessageType.SuccessfullyLoggedIn.ToString(),
                    Content = user
                };
            }
            else
            {
                return new Result
                {
                    Success = false,
                    Message = MessageType.InvalidUsernameOrPassword.ToString()
                };
            }

        }

        // PUT api/values/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE api/values/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
