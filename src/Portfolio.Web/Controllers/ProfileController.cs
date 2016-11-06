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

namespace Portfolio.Web.Controllers
{
    [Route("api/[controller]")]
    public class ProfileController : BaseController<DomainModels.Profile ,ViewModels.Profile>
    {
        private readonly IProfileService _profileService;        
        private readonly ILogger<ProfileController> _logger;

        public ProfileController(IProfileService profileService, ILogger<IProfileService> serviceLogger, ILogger<ProfileController> logger)
            : base(profileService, serviceLogger)
        {
            _profileService = profileService;            
            _logger = logger;
        }

        // GET api/values/5
        [HttpGet("[action]/{id}")]
        public ViewModels.Profile GetByUserId(string id)
        {
            if (id == null)
                throw new ArgumentNullException("Id value cannot be null");

            var result = _profileService.GetBy(l => l.UserId == new ObjectId(id)).FirstOrDefault();

            return Mapper.Map<DomainModels.Profile, ViewModels.Profile>(result);
        }
    }
}
