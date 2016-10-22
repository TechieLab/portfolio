using Microsoft.AspNetCore.Authentication.Cookies;
using Microsoft.Extensions.DependencyInjection;
using Portfolio.Core;
using Portfolio.DAL;
using Portfolio.DAL.Impl;
using Portfolio.Services;
using Portfolio.Services.Impl;

namespace Portfolio.Web.Helpers
{
    public static class ServiceCollectionExtensions
    {
        public static IServiceCollection RegisterServices(
            this IServiceCollection services)
        {
            services.AddSingleton<IMongoDbManager, MongoDbManager>();

            services.AddMvc();

            AutoMappingConfiguration.Configure();

            services.AddAuthentication(options => options.SignInScheme = CookieAuthenticationDefaults.AuthenticationScheme);

            services.AddTransient<IMongoDbManager, MongoDbManager>();
            // services.AddSingleton<IRepository<T>, MongoRepository<T>>();
            services.AddSingleton<IUserRepository, UserRepository>();
            services.AddSingleton<IProfileRepository, ProfileRepository>();

            //services.AddSingleton<IBaseService, BaseService>();
            services.AddSingleton<IUserService, UserService>();
            services.AddSingleton<IProfileService, ProfileService>();
            // and a lot more Services

            return services;
        }
    }
}
