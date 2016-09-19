using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Portfolio.Models;

namespace Portfolio.Models.Blog
{
    public class Post
    {
        public string Title { get; set; }
        public string Content { get; set; }
        public User PostedBy { get; set; }
    }
}
