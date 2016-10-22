using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using Porfolio.Web.Services;
using Portfolio.Core;
using Portfolio.Services;
using Portfolio.Web.Helpers;
using Store.Web.Helpers;

namespace Portfolio.Web
{
    public class Startup
    {
        private IMongoDbManager _manager;        
        public Microsoft.Extensions.Configuration.IConfiguration Configuration { get; set; }
       
        public Startup(IHostingEnvironment env)
        {
            var builder = new ConfigurationBuilder()
                .SetBasePath(env.ContentRootPath)
                .AddJsonFile("appsettings.json", optional: true, reloadOnChange: true)
                .AddJsonFile($"appsettings.{env.EnvironmentName}.json", optional: true)
                .AddEnvironmentVariables();

            Configuration = builder.Build();
        }
       

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {           
            ServiceCollectionExtensions.RegisterServices(services);                       
        }     

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IHostingEnvironment env, 
            ILoggerFactory loggerFactory, IMongoDbManager manager, IUserService userService,
            IProfileService profileService)
        {
            _manager = manager;
            
            loggerFactory.AddConsole(Configuration.GetSection("Logging"));
            loggerFactory.AddDebug();

            var logger = loggerFactory.CreateLogger("Configure Endpoint");
            logger.LogDebug("Server Configured......");

            //app.UseIISPlatformHandler();

            ConfigureApplication.Register(app, env);

            new DatabaseInitService(userService, profileService, null).ValidateData();
        }
    }
}
