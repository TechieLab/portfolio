using Microsoft.Extensions.Logging;
using Newtonsoft.Json;
using Portfolio.Services;
using ViewModels = Portfolio.ViewModels;
using DomainModels = Portfolio.Models;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;

namespace Porfolio.Web.Services
{
    public class DatabaseInitService
    {
        private readonly string _rootPath = Directory.GetCurrentDirectory();

        private readonly IUserService _userService;
        private readonly IProfileService _profileService;
        private readonly ILogger<DatabaseInitService> _logger;

        public DatabaseInitService(IUserService userService, 
            IProfileService profileService, 
            ILogger<DatabaseInitService> logger )
        {
            _userService = userService;
            _profileService = profileService;
            _logger = logger;
        }

        public void ValidateData()
        {
            var users = _userService.Get();

            if (!users.Any()) {
                var result = Mapper.Map<List<ViewModels.User>, List<DomainModels.User>>(GetJsonData());

                _userService.Create(result);
            }           
        }

        private List<ViewModels.User> GetJsonData() {

            var users = new Users();

            var albumPath = _rootPath + "/app_data/users.json";

            using (StreamReader file = File.OpenText(albumPath))
            using (JsonTextReader reader = new JsonTextReader(file))
            {
                JsonSerializer serializer = new JsonSerializer();
                users = (Users)serializer.Deserialize(file, typeof(Users));
            }

            return users.data;
        }
    }

    public class Users {
        public List<ViewModels.User> data { get; set; }
    }
}
