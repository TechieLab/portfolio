using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Portfolio.Models.LinkedIn
{
    public class Skill
    {
        public string name { get; set; }
    }

    public class Value4
    {
        public int id { get; set; }
        public Skill skill { get; set; }
    }

    public class Skills
    {
        public int _total { get; set; }
        public List<Value4> values { get; set; }
    }


}
