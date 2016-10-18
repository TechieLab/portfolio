using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Portfolio.Services;
using Portfolio.ViewModels;
using MongoDB.Bson;
using DomainModel = Portfolio.Models;
using AutoMapper;
using Portfolio.Core.Security;
using System.Security.Claims;

// For more information on enabling Web API for empty projects, visit http://go.microsoft.com/fwlink/?LinkID=397860

namespace Protfolio.Web.Controllers
{
    [Route("api/users")]
    public class UserController : Controller
    {
        private readonly IUserService _userService;        
        private readonly ILogger<UserController> _logger;

        public UserController(IUserService service, ILogger<UserController> logger)
        {
            _userService = service;            
            _logger = logger;
        }

        // GET: api/values
        public List<User> Get()
        {
            _logger.LogDebug("Listing all items");

            var user = _userService.Get();

            var result = Mapper.Map<List<DomainModel.User>, List<User>>(user);

            return result;
        }

        // GET: api/users/username
        [HttpGet("{userName}")]
        public User Get(string userName)
        {
            if (userName == null)
                throw new ArgumentNullException("userName is empty");

            _logger.LogDebug("Listing item by name -" + userName);

            var user = _userService.GetBy(l => l.UserName == userName).FirstOrDefault();

            if (user != null) {
               
                var claims = new List<Claim> {
                    new Claim(Portfolio.Core.Security.ClaimTypes.UserId, user.Id.ToString(), ClaimValueTypes.String),
                    new Claim(Portfolio.Core.Security.ClaimTypes.UserFullName, user.Name, ClaimValueTypes.String),
                    new Claim(Portfolio.Core.Security.ClaimTypes.UserEmail, user.EmailId, ClaimValueTypes.String)
                };

                var userIdentity = new ClaimsIdentity(claims, "Passport");

                var userPrincipal = new ClaimsPrincipal(userIdentity);
            }
            

            var result = Mapper.Map<DomainModel.User, User>(user);

            return result;
        }
    }
}
