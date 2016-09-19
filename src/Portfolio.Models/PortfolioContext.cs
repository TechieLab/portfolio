using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Portfolio.Models
{    

    public class PortfolioContext : DbContext
    {
        public PortfolioContext(DbContextOptions<PortfolioContext> options): base(options)
        {
        }
      
        //public DbSet<Contact> Contacts { get; set; }
        //public DbSet<Profile> Profiles { get; set; }
        //public DbSet<User> Users { get; set; }
        //public DbSet<Project> Projects { get; set; }
        //public DbSet<Lookup> Lookups { get; set; }

        //// Blog specific
        //public DbSet<Activity> Activities { get; set; }
        //public DbSet<Blog> Blogs { get; set; }
        //public DbSet<Post> Posts { get; set; }
        //public DbSet<Comment> Comments { get; set; }
        //public DbSet<Event> Events { get; set; }
        //public DbSet<Feed> Feeds { get; set; }
        //public DbSet<Media> Media { get; set; }        
        //public DbSet<Tweet> Tweets { get; set; }
    }
}
