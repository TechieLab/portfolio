using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Portfolio.Models.LinkedIn
{
    public class Education
    {
        public string degree { get; set; }
        public EndDate endDate { get; set; }
        public string fieldOfStudy { get; set; }
        public int id { get; set; }
        public string notes { get; set; }
        public string schoolName { get; set; }
        public StartDate startDate { get; set; }
    }

    public class Educations
    {
        public int _total { get; set; }
        public List<Education> values { get; set; }
    }
}
