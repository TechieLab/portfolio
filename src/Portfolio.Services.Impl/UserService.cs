using Portfolio.DAL;
using Portfolio.Models;
using Portfolio.Services.Impl;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Portfolio.Services
{
    public class UserService: BaseService<User>, IUserService
    {
        public UserService(IUserRepository repository): base(repository)
        {

        }

    }
}
