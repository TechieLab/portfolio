using Microsoft.AspNetCore.Mvc;
using Portfolio.Services;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Portfolio.Web.Controllers
{
    [Route("api/linkedIn")]
    public class LinkedInProfileController
    {
        private readonly ILinkedInService _service;

        public LinkedInProfileController(ILinkedInService service)
        {
            _service = service;
        }

        // GET api/values/5
        [HttpGet("get-profile/{authToken}")]
        public void Get(string authToken)
        {
           var obj =  _service.RetriveLinkedInProfile(authToken);

            if (obj != null) {
                _service.SaveLinkedInInfo(obj);
            }
        }
    }
}