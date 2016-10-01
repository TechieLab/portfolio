using MongoDB.Bson;
using MongoDB.Driver;
using Portfolio.Core;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Linq.Expressions;

namespace Portfolio.Services.Impl
{
    public abstract class BaseService<TEntity> : IBaseService<TEntity> where TEntity : class
    {        
        private IMongoCollection<TEntity> _mongoCollection;

        protected BaseService(IMongoDbManager dbManager)
        {
           dbManager.Connect("mongodb://localhost:27017");          
           dbManager.SetDatabase("music-storedb");            
        }

        protected void SetCollection(IMongoCollection<TEntity> mongoCollection){
             _mongoCollection = mongoCollection;
        }

        public void Create(TEntity entity)
        {
            _mongoCollection.InsertOneAsync(entity);
        }

        public bool Delete(ObjectId id)
        {
            var query = Builders<TEntity>.Filter.Eq("_id", id);
            var result = _mongoCollection.DeleteOneAsync(query);

            return Get(id) == null;
        }

        public TEntity Get(ObjectId id)
        {
            var query = Builders<TEntity>.Filter.Eq("_id", id);
            var speaker = _mongoCollection.Find(query).ToListAsync();

            return speaker.Result.FirstOrDefault();
        }

        public List<TEntity> GetAll()
        {  
            var entities = _mongoCollection.AsQueryable<TEntity>().ToList<TEntity>();                        
            return entities;
        }

        public void Update(ObjectId id, TEntity entity)
        {
            var query = Builders<TEntity>.Filter.Eq("_id", id);
            var update = _mongoCollection.ReplaceOneAsync(query, entity);
        }

        public void Dispose()
        {

        }

        public TEntity GetBy(Expression<Func<TEntity, bool>> criteria)
        {
            throw new NotImplementedException();
        }
    }
}
