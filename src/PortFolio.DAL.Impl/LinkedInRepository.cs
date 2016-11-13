using System;
using Portfolio.DAL;
using Portfolio.DAL.Impl;
using Portfolio.Models.LinkedIn;
using MongoDB.Driver;
using Portfolio.DAL.CustomExceptions;
using System.Linq;

namespace Portfolio.DAL.Impl
{
    public class LinkedInRepository : ILinkedInRepository
    {
        protected internal IMongoCollection<Profile> collection;

        public LinkedInRepository()
            : this(MongoUtil.GetDefaultConnectionString())
        {
        }

        /// <summary>
        /// Initializes a new instance of the MongoRepository class.
        /// </summary>
        /// <param name="connectionString">Connectionstring to use for connecting to MongoDB.</param>
        public LinkedInRepository(string connectionString)
        {
            var client = new MongoClient(connectionString);
            var db =  client.GetDatabase("portfoliodb");

            collection = db.GetCollection<Profile>("linkedinprofiles");
        }

        public Profile Get(string emailId)
        {
            var query = Builders<Profile>.Filter.Eq("email_id", emailId);
            var list = collection.Find(query).ToListAsync();
            if (list == null)
                throw new EntityNotFoundException<Profile>();

            return list.Result.FirstOrDefault();
        }

        public Profile Add(Profile entity)
        {
            collection.InsertOneAsync(entity);

            return entity;
        }
    }
}
