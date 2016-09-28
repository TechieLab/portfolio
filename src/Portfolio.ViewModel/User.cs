using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Portfolio.ViewModels
{
    public class User
    {
        public string Name { get; set; }
        public string Password { get; set; }
        public string LogonName { get; set; }
        public string Status { get; set; }
        public string Hint { get; set; }

        public Nullable<int> BadAttempts { get; set; }
        public Nullable<System.DateTime> LastLogonDate { get; set; }       
        public Nullable<int> Timeout { get; set; }       

        public Nullable<int> PageSize { get; set; }
    }
}
