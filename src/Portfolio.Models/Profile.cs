using MongoDB.Bson;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Portfolio.Models
{
    public class Profile: Entity, IEntity
    {
        public ObjectId UserId { get; set; } 
    }
}
