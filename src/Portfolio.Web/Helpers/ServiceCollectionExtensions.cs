using Microsoft.Extensions.DependencyInjection;
using Portfolio.Core;
using Portfolio.Services;
using Portfolio.Services.Impl;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Portfolio.Web.Helpers
{
    public static class ServiceCollectionExtensions
    {
        public static IServiceCollection RegisterServices(
            this IServiceCollection services)
        {
            services.AddTransient<IMongoDbManager, MongoDbManager>();
            // and a lot more Services

            return services;
        }
    }
}
