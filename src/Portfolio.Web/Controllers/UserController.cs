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
using Portfolio.Web.Helpers;

// For more information on enabling Web API for empty projects, visit http://go.microsoft.com/fwlink/?LinkID=397860

namespace Portfolio.Web.Controllers
{
    public class UserController : BaseController<DomainModels.User, ViewModels.User>
    {
        private readonly IUserService _userService;
        private ILogger _logger { get; } = ApplicationLogging.CreateLogger<UserController>();
        
        public UserController(IUserService userService) 
            : base(userService)
        {
            _userService = userService;           
        }
        
        // GET: api/users/username
        [HttpGet("api/users/getBy/{userName}")]
        public User GetBy(string userName)
        {
            if (userName == null)
                throw new ArgumentNullException("userName is empty");

            _logger.LogDebug("Listing item by name -" + userName);

            var user = _userService.GetBy(l => l.UserName == userName).FirstOrDefault();           

            var result = Mapper.Map<DomainModel.User, User>(user);
                       

            return result;
        }
    }
}
