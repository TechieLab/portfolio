﻿using System;
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

        // GET: api/values
        [HttpGet("{name}")]
        public User Get(string name)
        {
            _logger.LogDebug("Listing item by name -" + name);

            var user = _userService.GetBy(l => l.LogonName == name);

            var result = Mapper.Map<DomainModel.User, User>(user);

            return result;
        }
    }
}
