using Newtonsoft.Json;
using Portfolio.DAL;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Threading.Tasks;

namespace Portfolio.Services.Impl
{
    public class LinkedInService : ILinkedInService
    {
        private readonly ILinkedInRepository _repository;
        public LinkedInService(ILinkedInRepository repository)
        {
            if (repository == null)
                throw new ArgumentNullException("Unable to inject repostiory");

            _repository = repository;
        }

        public Models.LinkedIn.Profile RetriveLinkedInProfile(string emailId)
        {
            return _repository.Get(emailId);  
        }

        public void SaveLinkedInInfo(Models.LinkedIn.Profile profile)
        {
            if (profile == null)
                throw new ArgumentNullException();

           var entity = _repository.Add(profile);
        }
    }
}
