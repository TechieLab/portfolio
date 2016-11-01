using MongoDB.Bson;
using MongoDB.Driver;
using Portfolio.Core;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Linq.Expressions;
using Portfolio.DAL;
using Portfolio.Models;

namespace Portfolio.Services.Impl
{
    public abstract class BaseService<TEntity> : IBaseService<TEntity> where TEntity : IEntity
    {        
        private IRepository<TEntity> _repository;

        protected BaseService(IRepository<TEntity> repository)
        {
            _repository = repository;
        }

        public void Create(TEntity entity)
        {
            _repository.Add(entity);
        }

        public void Create(List<TEntity> entities)
        {
            _repository.Add(entities);
        }

        public void Delete(ObjectId id)
        {
            _repository.Delete(id);
        }
       
        public TEntity Get(ObjectId id)
        {
            return _repository.Get(id);
        }

        public List<TEntity> Get()
        {
            return _repository.Get();
        }

        public List<TEntity> GetBy(Expression<Func<TEntity, bool>> criteria)
        {
            return _repository.GetBy(criteria);
        }

        public void Update(ObjectId id, TEntity entity)
        {
            throw new NotImplementedException();
        }       

        public void Dispose()
        {
            throw new NotImplementedException();
        }

    }
}
