using Portfolio.DAL;
using Portfolio.Models.Blog;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Portfolio.Services.Impl
{
    public class BlogService : BaseService<Blog>, IBlogService
    {
        public BlogService(IBlogRepository repository) : base(repository)
        {
        }

    }
}