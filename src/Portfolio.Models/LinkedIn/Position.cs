using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Portfolio.Models.LinkedIn
{
    public class Position
    {
        public Company company { get; set; }
        public int id { get; set; }
        public bool isCurrent { get; set; }
        public StartDate startDate { get; set; }
        public string summary { get; set; }
        public string title { get; set; }
        public EndDate endDate { get; set; }
    }

    public class Positions
    {
        public int _total { get; set; }
        public List<Position> values { get; set; }
    }
}
