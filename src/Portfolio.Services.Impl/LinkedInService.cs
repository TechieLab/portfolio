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

        public Models.LinkedIn.Profile RetriveLinkedInProfile(string authToken)
        {
            try
            {
                var url = "https://api.linkedin.com/v1/people/~:(id,first-name,last-name,headline,picture-url,industry,summary,specialties,positions:(id,title,summary,start-date,end-date,is-current,company:(id,name,type,size,industry,ticker)),educations:(id,school-name,field-of-study,start-date,end-date,degree,activities,notes),associations,interests,num-recommenders,date-of-birth,publications:(id,title,publisher:(name),authors:(id,name),date,url,summary),patents:(id,title,summary,number,status:(id,name),office:(name),inventors:(id,name),date,url),languages:(id,language:(name),proficiency:(level,name)),skills:(id,skill:(name)),certifications:(id,name,authority:(name),number,start-date,end-date),courses:(id,name,number),recommendations-received:(id,recommendation-type,recommendation-text,recommender),honors-awards,three-current-positions,three-past-positions,volunteer)?format=json&oauth2_access_token=" + authToken;
                WebClient request = new WebClient();

                var response = request.DownloadString(url);
                var myObject = new Models.LinkedIn.Profile();
                JsonConvert.PopulateObject(response, myObject);

                return myObject;

            }
            catch (Exception ex)
            {
                return null;                        
            }   
        }

        public void SaveLinkedInInfo(Models.LinkedIn.Profile profile)
        {
            if (profile == null)
                throw new ArgumentNullException();

            _repository.Add(profile);

        }
    }
}
