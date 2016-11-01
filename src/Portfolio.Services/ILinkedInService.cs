using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Portfolio.Services
{
    public interface ILinkedInService
    {
        Models.LinkedIn.Profile RetriveLinkedInProfile(string authToken);

        void SaveLinkedInInfo(Models.LinkedIn.Profile profile);
    }
}
