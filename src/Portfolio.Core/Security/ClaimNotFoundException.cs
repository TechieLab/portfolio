using System;
using System.Runtime.Serialization;

namespace Portfolio.Core.Security
{
    /// <summary>
    /// Exception to be thrown when an expected claim is not found.
    /// </summary>
    [Serializable]
    public class ClaimNotFoundException : Exception
    {
        public ClaimNotFoundException(string message) : base(message) { }
        public ClaimNotFoundException(string message, Exception inner) : base(message, inner) { }
        protected ClaimNotFoundException(
          SerializationInfo info,
          StreamingContext context)
            : base(info, context) { }
    }
}
