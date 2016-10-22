using System;
using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;


namespace Portfolio.Models.Blog
{
    public class Blog : Entity, IEntity
    {       

        [BsonElement("name")]
        public string Name { get; set; }
        
        [BsonElement("blogTitle")]
        public String BlogTitle { get; set; }

        [BsonElement("blogDescription")]
        public String BlogDescription { get; set; }
    }
}
