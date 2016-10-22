using System;
using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace Portfolio.Models
{
    public class User : Entity, IEntity
    {
        [BsonElement("userId")]
        public string UserId { get; set; }

        [BsonElement("name")]
        public string Name { get; set; }

        [BsonElement("password")]
        public string Password { get; set; }

        [BsonElement("userName")]
        public string UserName { get; set; }

        [BsonElement("emailId")]
        public string EmailId { get; set; }

        [BsonElement("status")]
        public string Status { get; set; }

        [BsonElement("hint")]
        public string Hint { get; set; }

        [BsonElement("badAttempts")]
        public Nullable<int> BadAttempts { get; set; }

        [BsonElement("lastLogonDate")]
        public Nullable<System.DateTime> LastLogonDate { get; set; }

        [BsonElement("timeout")]
        public Nullable<int> Timeout { get; set; }

        [BsonElement("pageSize")]
        public Nullable<int> PageSize { get; set; }
               
    }
}
