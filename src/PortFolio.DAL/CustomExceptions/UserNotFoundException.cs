using System;
using System.Runtime.Serialization;

namespace Portfolio.DAL.CustomExceptions
{
    [Serializable]
    public class UserNotFoundException : Exception
    {
        public UserNotFoundException(string userId) : base(userId) { }
        public UserNotFoundException(string userId, Exception inner) : base(userId, inner) { }
        protected UserNotFoundException(
          SerializationInfo info,
          StreamingContext context)
            : base(info, context) { }

        public string UserId { get { return Message; } }
    }
}
