using Portfolio.DAL;
using Portfolio.DAL.Impl;

namespace Portfolio.DAL.Impl
{
    public class LinkedInRepository : MongoRepository<Portfolio.Models.LinkedIn.Profile>, ILinkedInRepository
    {

    }
}
