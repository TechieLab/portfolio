﻿using MongoDB.Bson;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Threading.Tasks;

namespace Portfolio.Services
{
    public interface IBaseService<TEntity> : IDisposable where TEntity : class
    {
        TEntity Get(ObjectId id);

        TEntity GetBy(Expression<Func<TEntity, bool>> criteria);

        List<TEntity> GetAll();

        void Create(TEntity entity);

        bool Delete(ObjectId id);

        void Update(ObjectId id ,TEntity entity);
    }
}
