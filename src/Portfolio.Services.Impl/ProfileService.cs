using Portfolio.DAL;
using Portfolio.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Portfolio.Services.Impl
{
    public class ProfileService: BaseService<Profile>, IProfileService
    {
        public ProfileService(IProfileRepository repository) : base(repository)
        {

        }     
    }
}
