using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Portfolio.Services;
using Portfolio.ViewModels;
using MongoDB.Bson;
using DomainModel = Portfolio.Models;
using AutoMapper;
using Portfolio.Models.Blog;


// For more information on enabling MVC for empty projects, visit http://go.microsoft.com/fwlink/?LinkID=397860

namespace Store.Web.Controllers
{
    [Route("api/blogs")]
    public class BlogController : Controller
    {

        private readonly IBlogService _blogService;
        private readonly ILogger<BlogController> _logger;

        public BlogController(IBlogService service, ILogger<BlogController> logger)
        {
            _blogService = service;
            _logger = logger;
        }

        // GET: api/values
        public List<Blog> Get()
        {
            _logger.LogDebug("Listing all items");

            var blog = IBlogService.Get();

            var result = Mapper.Map<List<DomainModel.Blog>, List<User>>(blog);

            return result;
        }
    }
}
