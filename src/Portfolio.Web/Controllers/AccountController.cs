using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Portfolio.Services;
using Microsoft.Extensions.Logging;
using Portfolio.ViewModels;

// For more information on enabling Web API for empty projects, visit http://go.microsoft.com/fwlink/?LinkID=397860

namespace Store.Web.Controllers
{
    [Route("api/account")]
    public class AccountController : Controller
    {
        private readonly IAccountService _accountService;
        private static readonly ILogger<AccountController> _logger;

        public AccountController(IAccountService accountService)
        {
            _accountService = accountService;
        }
        // POST api/values
        [HttpPost("authenticate")]
        public Result Post(LoginModel model)
        {
            if (model == null)
                throw new ArgumentNullException("Form value can not be null");

            if (ModelState.IsValid)
            {
                var username = model.UserName;
                var password = model.Password;

                var currentUser = _accountService.Authenticate(model.UserName, model.Password);

                if (currentUser == null)
                {
                    return new Result
                    {
                        Success = false,
                        Message = MessageType.InvalidUsernameOrPassword.ToString()
                    };
                }

                return new Result
                {
                    Success = true,
                    Message = MessageType.SuccessfullyLoggedIn.ToString(),
                    Content = currentUser
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
