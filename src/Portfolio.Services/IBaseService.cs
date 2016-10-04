using MongoDB.Bson;
using Portfolio.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Threading.Tasks;

namespace Portfolio.Services
{
    public interface IBaseService<TEntity> : IDisposable where TEntity : IEntity
    {
        List<TEntity> Get();

        TEntity Get(ObjectId id);

        List<TEntity> GetBy(Expression<Func<TEntity, bool>> criteria);        

        void Create(TEntity entity);

        void Create(List<TEntity> entities);

        void Update(ObjectId id, TEntity entity);

        void Delete(ObjectId id);        
    }
}
