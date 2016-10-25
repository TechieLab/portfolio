using System;
using System.Runtime.Serialization;

namespace Portfolio.DAL.CustomExceptions
{
    [Serializable]
   public class ProfileNotFoundException :Exception
    {
        public ProfileNotFoundException(string profileId) : base(profileId) { }
        public  ProfileNotFoundException(string profileId, Exception inner) : base(profileId, inner) { }
        protected ProfileNotFoundException(
          SerializationInfo info,
          StreamingContext context)
            : base(info, context) { }

        public string OrderId { get { return Message; } }
    }
}
