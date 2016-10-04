using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Portfolio.Services;
using Portfolio.ViewModels;
using MongoDB.Bson;
using DomainModels = Portfolio.Models;
using ViewModels = Portfolio.ViewModels;

using AutoMapper;

// For more information on enabling Web API for empty projects, visit http://go.microsoft.com/fwlink/?LinkID=397860

namespace Store.Web.Controllers
{
    [Route("api/profile")]
    public class ProfileController : Controller
    {
        private readonly IProfileService _profileService;        
        private readonly ILogger<ProfileController> _logger;

        public ProfileController(IProfileService service, ILogger<ProfileController> logger)
        {
            _profileService = service;            
            _logger = logger;
        }

        // GET: api/values
        [HttpGet("{id}")]
        public ViewModels.Profile Get(ObjectId id)
        {
            _logger.LogDebug("Get profile by id - " + id);

            var profile = _profileService.GetBy(l => l.Id == id).FirstOrDefault();

           var result = Mapper.Map<DomainModels.Profile, ViewModels.Profile>(profile);

            return result;
        }        
    }
}
