using System;
using System.Linq;
using Portfolio.Models;
using Microsoft.Extensions.Logging;
using Portfolio.DAL;
using Portfolio.DAL.CustomExceptions;

namespace Portfolio.Services.Impl
{
    public class AccountService : IAccountService
    {      
        private static readonly ILogger<AccountService> _logger;

        private readonly IUserRepository _userRepository;

        public AccountService(IUserRepository userRepository)
        {
            _userRepository = userRepository;
        }

        public User Authenticate(string userName, string password)
        {
            var user = _userRepository.GetBy(u => u.UserName.ToUpper() == userName.ToUpper()).FirstOrDefault();

            if (user != null)
            {
                var pwd = user.Password;

                if (password.ToUpper() == pwd.ToUpper())
                {
                    user.LastLogonDate = new DateTime();                   
                    _userRepository.Update(user);
                    return user;
                }
            }

            return null;
        }

        public User ResetUserPassword(User user)
        {
            var originalUser = _userRepository.GetBy(u => u.UserName.ToUpper() == user.UserName.ToUpper()).FirstOrDefault();

            if (originalUser == null) throw new UserNotFoundException(user.UserName);

            originalUser.Password = user.Password;
            originalUser.Audit.ModifiedOn = DateTime.Now;

            _userRepository.Update(user);

            return originalUser;
        }
    }
}
