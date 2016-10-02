using MongoDB.Bson;
using MongoDB.Driver;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Portfolio.Core
{
    public class MongoDbManager : IMongoDbManager
    {
        public MongoDbManager()
        {
           // _manager.Connect("mongodb://localhost:27017");
            //_manager.SetDatabase("music-storedb");
        }

    }
}
