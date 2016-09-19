using Portfolio.Core;
using Portfolio.Models.Blog;
using Portfolio.Services.Impl;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Portfolio.Services
{
    public class BlogService : BaseService<Blog>, IBlogService
    {
        public BlogService(IMongoDbManager dbManager) : base(dbManager)
        {

            var _mongoCollection = dbManager.GetCollection<Blog>("blogs");

            SetCollection(_mongoCollection);
        }
    }
}
