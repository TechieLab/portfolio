using System;
using System.Linq.Expressions;
using System.Runtime.Serialization;

namespace Portfolio.DAL.CustomExceptions
{
    [Serializable]
    public class EntityNotFoundException<TEntity> : Exception
    {
        public EntityNotFoundException() : base() { }
        public EntityNotFoundException(TEntity entity) : base(entity.ToString()) { }
        public EntityNotFoundException(Expression<Func<TEntity, bool>> entity) : base(entity.ToString()) { }
        public EntityNotFoundException(TEntity entity, Exception inner) : base(entity.ToString(), inner) { }


        protected EntityNotFoundException(
          SerializationInfo info,
          StreamingContext context)
            : base(info, context) { }

    }
}
