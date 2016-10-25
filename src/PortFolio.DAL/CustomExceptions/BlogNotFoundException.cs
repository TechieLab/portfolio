using System;
using System.Linq.Expressions;
using System.Runtime.Serialization;

namespace Portfolio.DAL.CustomExceptions
{
    [Serializable]
    public class BlogNotFoundException<TEntity> : Exception 
    {
        public BlogNotFoundException(TEntity entity) : base(entity.ToString()) { }
        public BlogNotFoundException(Expression<Func<TEntity, bool>> entity) : base(entity.ToString()) { }
        public BlogNotFoundException(TEntity entity, Exception inner) : base(entity.ToString(), inner) { }
       
       
        protected BlogNotFoundException(
          SerializationInfo info,
          StreamingContext context)
            : base(info, context) { }
        
    }
}
