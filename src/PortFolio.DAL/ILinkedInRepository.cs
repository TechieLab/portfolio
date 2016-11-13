using Portfolio.DAL;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Portfolio.DAL
{
    public interface ILinkedInRepository
    {
        Models.LinkedIn.Profile Get(string id);
        Models.LinkedIn.Profile Add(Models.LinkedIn.Profile entity);
    }
}
