using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Portfolio.Models.LinkedIn
{
    public class Profile
    {
        public string id { get; set; }
        public DateOfBirth dateOfBirth { get; set; }
        public Educations educations { get; set; }
        public string firstName { get; set; }
        public string headline { get; set; }       
        public string industry { get; set; }
        public Languages languages { get; set; }
        public string lastName { get; set; }
        public int numRecommenders { get; set; }
        public string pictureUrl { get; set; }
        public Positions positions { get; set; }
        public RecommendationsReceived recommendationsReceived { get; set; }
        public Skills skills { get; set; }
        public string summary { get; set; }
        public ThreeCurrentPositions threeCurrentPositions { get; set; }
        public ThreePastPositions threePastPositions { get; set; }
        public Volunteer volunteer { get; set; }
        public string UserId { get; set; }
    }
}
