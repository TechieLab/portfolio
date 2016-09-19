using Portfolio.Core.Data.Specification;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;

namespace Portfolio.DAL.Impl
{
    public abstract class BaseRespository<TEntity> : IBaseRepository<TEntity> where TEntity : class
    {
        public void Add(TEntity entity)
        {
            throw new NotImplementedException();
        }

        public void Attach(TEntity entity)
        {
            throw new NotImplementedException();
        }

        public int Count()
        {
            throw new NotImplementedException();
        }

        public int Count(ISpecification<TEntity> criteria)
        {
            throw new NotImplementedException();
        }

        public int Count(Expression<Func<TEntity, bool>> criteria)
        {
            throw new NotImplementedException();
        }

        public void Delete(ISpecification<TEntity> criteria)
        {
            throw new NotImplementedException();
        }

        public void Delete(Expression<Func<TEntity, bool>> criteria)
        {
            throw new NotImplementedException();
        }

        public void Delete(TEntity entity)
        {
            throw new NotImplementedException();
        }

        public void Dispose()
        {
            throw new NotImplementedException();
        }

        public IEnumerable<TEntity> Find(Expression<Func<TEntity, bool>> criteria)
        {
            throw new NotImplementedException();
        }

        public IEnumerable<TEntity> Find(ISpecification<TEntity> criteria)
        {
            throw new NotImplementedException();
        }

        public TEntity FindOne(Expression<Func<TEntity, bool>> criteria)
        {
            throw new NotImplementedException();
        }

        public TEntity FindOne(ISpecification<TEntity> criteria)
        {
            throw new NotImplementedException();
        }

        public IEnumerable<TEntity> Get<TOrderBy>(Expression<Func<TEntity, TOrderBy>> orderBy, int pageIndex, int pageSize, SortOrder sortOrder = SortOrder.Ascending)
        {
            throw new NotImplementedException();
        }

        public IEnumerable<TEntity> Get<TOrderBy>(ISpecification<TEntity> specification, Expression<Func<TEntity, TOrderBy>> orderBy, int pageIndex, int pageSize, SortOrder sortOrder = SortOrder.Ascending)
        {
            throw new NotImplementedException();
        }

        public IEnumerable<TEntity> Get<TOrderBy>(Expression<Func<TEntity, bool>> criteria, Expression<Func<TEntity, TOrderBy>> orderBy, int pageIndex, int pageSize, SortOrder sortOrder = SortOrder.Ascending)
        {
            throw new NotImplementedException();
        }

        public IEnumerable<TEntity> GetAll()
        {
            throw new NotImplementedException();
        }

        public TEntity GetBy(ISpecification<TEntity> criteria)
        {
            throw new NotImplementedException();
        }

        public TEntity GetBy(Expression<Func<TEntity, bool>> predicate)
        {
            throw new NotImplementedException();
        }

        public TEntity GetByKey(object keyValue)
        {
            throw new NotImplementedException();
        }

        public IQueryable<TEntity> GetQuery()
        {
            throw new NotImplementedException();
        }

        public IQueryable<TEntity> GetQuery(ISpecification<TEntity> criteria)
        {
            throw new NotImplementedException();
        }

        public IQueryable<TEntity> GetQuery(Expression<Func<TEntity, bool>> predicate)
        {
            throw new NotImplementedException();
        }

        public TEntity Single(ISpecification<TEntity> criteria)
        {
            throw new NotImplementedException();
        }

        public TEntity Single(Expression<Func<TEntity, bool>> criteria)
        {
            throw new NotImplementedException();
        }

        public void Update(TEntity entity)
        {
            throw new NotImplementedException();
        }
    }
}
