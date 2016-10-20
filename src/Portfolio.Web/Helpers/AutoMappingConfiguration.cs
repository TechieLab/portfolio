using AutoMapper;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using DomainModel = Portfolio.Models;
using ViewModels = Portfolio.ViewModels;

namespace Portfolio.Web.Helpers
{
    public static class AutoMappingConfiguration
    {
        public static void Configure()
        {

            Mapper.Initialize((Action<IMapperConfigurationExpression>)(config =>
            {
                config.CreateMap<ViewModels.User, DomainModel.Blog>().ReverseMap();
            }));
        }
    }
}
