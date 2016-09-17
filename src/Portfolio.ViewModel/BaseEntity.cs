﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Portfolio.ViewModels
{
    public class BaseEntity
    {
        public string Id { get; set; }

        public DateTime ModifiedDate { get; set; }
        public DateTime CreatedDate { get; set; }

        public string ModifiedBy { get; set; }
        public string CreatedBy { get; set; }
    }
}
