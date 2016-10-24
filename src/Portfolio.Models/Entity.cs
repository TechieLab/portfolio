using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;
using System;
using System.Runtime.Serialization;

namespace Portfolio.Models
{
    /// <summary>
    /// Abstract Entity for all the BusinessEntities.
    /// </summary>
   
    [Serializable]
    [BsonIgnoreExtraElements(Inherited = true)]
    public abstract class Entity : IEntity
    {
        /// <summary>
        /// Gets or sets the id for this object (the primary record for an entity).
        /// </summary>
        /// <value>The id for this object (the primary record for an entity).</value>
        
        [BsonRepresentation(BsonType.ObjectId)]
        public virtual ObjectId Id { get; set; }

        public virtual Audit Audit { get; set; }
    }
}
