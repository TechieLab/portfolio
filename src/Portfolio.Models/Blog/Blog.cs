using System;
using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;


namespace Portfolio.Models.Blog
{
    public class Blog : Entity, IEntity
    {
        [BsonElement("userId")]
        public string UserId { get; set; }

        [BsonElement("name")]
        public string Name { get; set; }

        [BsonElement("userName")]
        public string UserName { get; set; }

        [BsonElement("emailId")]
        public string EmailId { get; set; }

        [BsonElement("lastLogonDate")]
        public Nullable<System.DateTime> LastLogonDate { get; set; }

        [BsonElement("pageSize")]
        public Nullable<int> PageSize { get; set; }

        [BsonElement("blogTitle")]
        public String BlogTitle { get; set; }

        [BsonElement("blogDescription")]
        public String BlogDescription { get; set; }
    }
}
