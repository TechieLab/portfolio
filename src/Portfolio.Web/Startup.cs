using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using Microsoft.AspNetCore.StaticFiles;
using System.IO;
using Portfolio.Core;
using Portfolio.Services;
using Portfolio.Services.Impl;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.ModelBinding;
using Portfolio.Web.Helpers;

namespace Portfolio.Web
{
    public class Startup
    {
        private IMongoDbManager _manager;
        public IConfiguration Configuration { get; set; }

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
            services.AddSingleton<IMongoDbManager, MongoDbManager>();

            services.AddMvc();

            //services.Configure<MvcOptions>(options =>
            //                         options
            //                         .OutputFormatters
            //                         .RemoveAll(formatter => formatter.Instance is XmlDataContractSerializerOutputFormatter)
            //                               );

        }     

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IHostingEnvironment env, ILoggerFactory loggerFactory, IMongoDbManager manager)
        {
            _manager = manager;
            
            loggerFactory.AddConsole(Configuration.GetSection("Logging"));
            loggerFactory.AddDebug();

            var logger = loggerFactory.CreateLogger("Configure Endpoint");
            logger.LogDebug("Server Configured......");

            //app.UseIISPlatformHandler();

            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
                
                app.UseBrowserLink();

                _manager.Connect("mongodb://localhost:27017");
                _manager.SetDatabase("music-storedb");
            }
            else
            {
                app.UseExceptionHandler("/Home/Error");
            }


            app.UseDefaultFiles();
            app.UseStaticFiles();           

            app.Use(async (context, next) =>
            {
                await next();

                if (context.Response.StatusCode == 404)
                {
                    context.Request.Path = "/index.html"; // Put your Angular root page here 
                    await next();
                }
            });

            app.UseMvcWithDefaultRoute();
            app.UseMvc();         
        }
    }
}
