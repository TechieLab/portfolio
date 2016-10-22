using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Portfolio.Services;
using Portfolio.ViewModels;
using MongoDB.Bson;
using DomainModels = Portfolio.Models;
using ViewModels = Portfolio.ViewModels;
using AutoMapper;
using Portfolio.Services.Impl;

// For more information on enabling MVC for empty projects, visit http://go.microsoft.com/fwlink/?LinkID=397860

namespace Portfolio.Web.Controllers
{
    public class BlogController : BaseController<DomainModels.Blog.Blog, ViewModels.Blog.Blog>
    {

        private readonly IBlogService _blogService;
        private readonly ILogger<BlogController> _logger;

        public BlogController(IBlogService service, ILogger<BlogController> logger , ILogger<IBlogService> loggerService) : base(service, loggerService)
        {
            _blogService = service;
            _logger = logger;
        }      
    }
}
