using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Portfolio.Models.LinkedIn
{
    public class Language
    {
        public string name { get; set; }
    }

    public class Value2
    {
        public int id { get; set; }
        public Language language { get; set; }
    }

    public class Languages
    {
        public int _total { get; set; }
        public List<Value2> values { get; set; }
    }
}
