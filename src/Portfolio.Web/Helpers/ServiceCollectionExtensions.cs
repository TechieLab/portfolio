using Microsoft.AspNetCore.Authentication.Cookies;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Formatters;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Newtonsoft.Json.Serialization;
using Portfolio.Core;
using Portfolio.DAL;
using Portfolio.DAL.Impl;
using Portfolio.Services;
using Portfolio.Services.Impl;
using Store.Web.Helpers;

namespace Portfolio.Web.Helpers
{
    public static class ServiceCollectionExtensions
    {
        public static IServiceCollection RegisterServices(
            this IServiceCollection services, IConfiguration Configuration)
        {
            services.AddSingleton<IMongoDbManager, MongoDbManager>();

            services.AddOptions();

            services.AddMvc()
                 .AddJsonOptions(options =>
                 {
                     options.SerializerSettings.ContractResolver =
                         new CamelCasePropertyNamesContractResolver();
                 });

            AutoMappingConfiguration.Configure();

            services.AddAuthentication(options => options.SignInScheme = CookieAuthenticationDefaults.AuthenticationScheme);

            services.AddTransient<IMongoDbManager, MongoDbManager>();
            // services.AddSingleton<IRepository<T>, MongoRepository<T>>();
            services.AddSingleton<IUserRepository, UserRepository>();
            services.AddSingleton<IProfileRepository, ProfileRepository>();

            //services.AddSingleton<IBaseService, BaseService>();
            services.AddSingleton<IAccountService, AccountService>();
            services.AddSingleton<IUserService, UserService>();
            services.AddSingleton<IProfileService, ProfileService>();
            // and a lot more Services

            services.Configure<Auth0Settings>(Configuration.GetSection("Auth0"));
       
            return services;
        }
    }
}
