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

// For more information on enabling Web API for empty projects, visit http://go.microsoft.com/fwlink/?LinkID=397860

namespace Store.Web.Controllers
{
    [Route("api/users")]
    public class SongController : Controller
    {
        private readonly IUserService _userService;        
        private readonly ILogger<SongController> _logger;

        public SongController(IUserService service, ILogger<SongController> logger)
        {
            _userService = service;            
            _logger = logger;
        }

        // GET: api/values
        [HttpGet("{id}")]
        public User Get(ObjectId id)
        {
            _logger.LogDebug("Listing all items");

            var user = _userService.Get(id);

           var result = Mapper.Map<DomainModel.User, User>(user);

            return result;
        }               
    }
}
