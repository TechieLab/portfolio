using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Portfolio.Services;
using Portfolio.ViewModels;
using DomainModel = Portfolio.Models;
using AutoMapper;
using DomainModels = Portfolio.Models;
using Store.Web.Helpers;

// For more information on enabling Web API for empty projects, visit http://go.microsoft.com/fwlink/?LinkID=397860

namespace Portfolio.Web.Controllers
{
    [Route("api/user")]
    public class UserController : BaseController<DomainModels.User, ViewModels.User>
    {
        private readonly IUserService _userService;        
        private readonly ILogger<UserController> _logger;
        private readonly ILogger<ClaimsManager> _claimsManagerLogger;

        public UserController(IUserService userService, ILogger<IUserService> serviceLogger, ILogger<UserController> logger, 
            ILogger<ClaimsManager> claimsManagerLogger) 
            : base(userService, serviceLogger)
        {
            _userService = userService;
            _claimsManagerLogger = claimsManagerLogger;
            _logger = logger;
        }
        
        // GET: api/users/username
        [HttpGet("getBy/{userName}")]
        public User GetBy(string userName)
        {
            if (userName == null)
                throw new ArgumentNullException("userName is empty");

            _logger.LogDebug("Listing item by name -" + userName);

            var user = _userService.GetBy(l => l.UserName == userName).FirstOrDefault();           

            var result = Mapper.Map<DomainModel.User, User>(user);

            new ClaimsManager(_claimsManagerLogger).SetUserContext();

            return result;
        }
    }
}
