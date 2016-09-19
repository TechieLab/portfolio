using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Portfolio.Models;
using Portfolio.DAL;

namespace Portfolio.DAL.Impl
{
    public class UserRepository : BaseRespository<User>, IUserRepository<User>
    {

    }
}
