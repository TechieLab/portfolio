var mongoose = require('mongoose');
var express = require('express');
var mongoosePaginate = require('mongoose-paginate');
var app = express();

var linkedIn = require('../dist/server/models/Linkedin/linkedin.model');



//console.log(blog)

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/sourabhblog');


/*db.BlogPost.save(
   [
     { 
         title: 'Start Bootstrap Moves to MIT Licensing',
         link:'http://www.google.com',
         description: 'All of the free templates and themes on Start Bootstrap are now licensed under the MIT license instead of Apache 2.0.' + 
                  'The MIT license is simple, and it allows you to do just about anything you want with the templates.',
        created_at: "2017-08-10T17:53:55.433Z"

     } 
   ]
)  */


var linked =
    new linkedIn(
     {
  "certifications": {
    "_total": 2,
    "values": [
      {
        "authority": {"name": "Microsoft"},
        "id": 1799676678,
        "name": "MS: Programming in HTML5 with JavaScript and CSS3",
        "startDate": {
          "month": 2,
          "year": 2016
        }
      },
      {
        "authority": {"name": "Microsoft"},
        "id": 1799939967,
        "name": "MCPS: Microsoft Certified Professional",
        "startDate": {
          "month": 2,
          "year": 2016
        }
      }
    ]
  },
  "courses": {
    "_total": 1,
    "values": [{
      "id": 33,
      "name": "Computer Technology",
      "number": ""
    }]
  },
  "dateOfBirth": {
    "day": 5,
    "month": 7,
    "year": 1990
  },
  "educations": {
    "_total": 3,
    "values": [
      {
        "degree": "Bachelor's degree",
        "endDate": {"year": 2012},
        "fieldOfStudy": "Computer Science",
        "id": 41153386,
        "schoolName": "Karamvir Dadasaheb Kannamwar Engineering College, Nandanvan",
        "startDate": {"year": 2008}
      },
      {
        "degree": "engineering",
        "endDate": {"year": 2008},
        "fieldOfStudy": "computer technology",
        "id": 89705749,
        "schoolName": "Kendriya Vidyalaya",
        "startDate": {"year": 2002}
      },
      {
        "degree": "BE",
        "fieldOfStudy": "computer Technology",
        "id": 145448823,
        "schoolName": "kdk college of Engineering Nagpur"
      }
    ]
  },
  "emailAddress": "sourabhchill@gmail.com",
  "firstName": "Sourabh",
  "headline": "Sr. Software Developer/UI developer  at RealPage, Inc.",
  "id": "ShsDi9DqB8",
  "industry": "Computer Software",
  "interests": "travelling,explore new technologies,photography",
  "languages": {
    "_total": 3,
    "values": [
      {
        "id": 18,
        "language": {"name": "English"},
        "proficiency": {
          "level": "PROFESSIONAL_WORKING",
          "name": "PROFESSIONAL_WORKING"
        }
      },
      {
        "id": 19,
        "language": {"name": "Hindi"},
        "proficiency": {
          "level": "FULL_PROFESSIONAL",
          "name": "FULL_PROFESSIONAL"
        }
      },
      {
        "id": 20,
        "language": {"name": "Bengali"},
        "proficiency": {
          "level": "NATIVE_OR_BILINGUAL",
          "name": "NATIVE_OR_BILINGUAL"
        }
      }
    ]
  },
  "lastName": "sen",
  "numRecommenders": 6,
  "pictureUrl": "https://media.licdn.com/mpr/mprx/0_--L8rA1tYz_TzhoDZ_PhRNTtscwTzA6u4_jankmtUK0hz3EhZ_gSO8ntyQojP1q8l9l3jQM-BQW8nzDDgThy4LZO-QW3nzau4Th_1XS1JbySyizrNrnDPK_Gt1PA0zMglGkuNsgZ0LT",
  "positions": {
    "_total": 3,
    "values": [
      {
        "company": {
          "id": 9956,
          "industry": "Computer Software",
          "name": "RealPage, Inc.",
          "size": "1001-5000",
          "type": "Public Company"
        },
        "id": 762216115,
        "isCurrent": true,
        "startDate": {
          "month": 1,
          "year": 2016
        },
        "title": "Software Developer"
      },
      {
        "company": {
          "id": 107629,
          "industry": "Information Technology & Services",
          "name": "TechAspect",
          "size": "201-500",
          "type": "Privately Held"
        },
        "endDate": {
          "month": 12,
          "year": 2015
        },
        "id": 429385048,
        "isCurrent": false,
        "startDate": {
          "month": 12,
          "year": 2012
        },
        "title": "UI Developer"
      },
      {
        "company": {
          "id": 1449,
          "industry": "Entertainment",
          "name": "Electronic Arts",
          "size": "5001-10000",
          "ticker": "EA",
          "type": "Public Company"
        },
        "endDate": {
          "month": 11,
          "year": 2012
        },
        "id": 347998721,
        "isCurrent": false,
        "startDate": {
          "month": 6,
          "year": 2012
        },
        "title": "Software Trainee"
      }
    ]
  },
  "publications": {
    "_total": 2,
    "values": [
      {
        "authors": {
          "_total": 4,
          "values": [
            {"id": 60},
            {"id": 61},
            {"id": 62},
            {
              "id": 63,
              "name": "Meenakshi Yadav"
            }
          ]
        },
        "date": {
          "day": 3,
          "month": 3,
          "year": 2012
        },
        "id": 59,
        "publisher": {"name": "Umayam Publications, ISBN 81-903041-9-4"},
        "summary": "Its a conclusive approach to analyze comments or reviews about a product/searched term from the web. In this paper we explore the use of phrases occurring maximally in text as properties for sentiment classification of product reviews. The approach does not rely on predefined sentiment lexicons, and the motivation for this is that potentially every word could be considered as expressing something positive and/or negative in different situations, and that the context and the personal attitude of the opinion holder should be taken into consideration while determining the polarity of the phrase, instead of doing this out of a particular context.",
        "title": "A Conclusive Approach To Analyze Web Reviews Through Maximal Phrase Based Technique"
      },
      {
        "authors": {
          "_total": 4,
          "values": [
            {"id": 55},
            {"id": 56},
            {"id": 57},
            {
              "id": 58,
              "name": "Meenakshi Yadav"
            }
          ]
        },
        "date": {
          "day": 3,
          "month": 3,
          "year": 2012
        },
        "id": 54,
        "publisher": {"name": "Umayam Publications, ISBN 81-903041-9-4"},
        "summary": "Its a conclusive approach to analyze comments or reviews about a product/searched term from the web. In this paper we explore the use of phrases occurring maximally in text as properties for sentiment classification of product reviews. The approach does not rely on predefined sentiment lexicons, and the motivation for this is that potentially every word could be considered as expressing something positive and/or negative in different situations, and that the context and the personal attitude of the opinion holder should be taken into consideration while determining the polarity of the phrase, instead of doing this out of a particular context.",
        "title": "A Conclusive Approach To Analyze Web Reviews Through Maximal Phrase Based Technique"
      }
    ]
  },
  "recommendationsReceived": {
    "_total": 6,
    "values": [
      {
        "id": 519819921,
        "recommendationText": "Sourabh is a very enthusiastic person as well as a technical guy at his best. He is very confident, self motivated and knowledgeable in his area of work. He is also fun to work with and a good team player. \r\n\r\nI wish him all the best in his endeavors..",
        "recommendationType": {"code": "education"},
        "recommender": {
          "headline": "SSE (Ruby on Rails), Looking for new tech opportunities",
          "pictureUrl": "https://media.licdn.com/mpr/mprx/0_fobGOohvsP7J5-n1Lo1_1gBv4X8JhPJ0hoxuZx9vy-pZ5_H0upgG9oav0_7Z885PhUAfK4SzzX14_BW_8MCO9OhJKX1M_Bu18MC3j0zqUL6zWTB72Hq7gwRLrldWoBRGdV6asDLfdA1"
        }
      },
      {
        "id": 557782074,
        "recommendationText": "I have been working with Sourabh for more than 2 years. He is very responsible person in his assignments and takes initiative in all his or team works. He has really a very good technical skills than his experience. He is self motivated, hard worker and decent sometimes.\r\n",
        "recommendationType": {"code": "colleague"},
        "recommender": {
          "headline": "Adobe Certified AEM Developer at TechAspect Solutions Pvt Ltd.",
          "pictureUrl": "https://media.licdn.com/mpr/mprx/0_ahE7ij4-jDhwn_ew3lK3wEd1yJhcrTeBwXp36ex-jYwnrlUwXltaCsA1sJVX9loEkht73mtPrmo9P5GBGP7PIdPxvmoBP50IXP7uhHQtY70RMPXBeGJG8ye_zRrbV5eVSrI_bVX8nLd"
        }
      },
      {
        "id": 555269304,
        "recommendationText": "sourabh is one of the best UI developers i have come across. He can do a lot with his never say die attitude. I wish him good luck for his future endeavors.\r\n",
        "recommendationType": {"code": "colleague"},
        "recommender": {
          "headline": "Solution Architect at Xoriant Solutions",
          "pictureUrl": "https://media.licdn.com/mpr/mprx/0_YkBR4z3j5h0fqZ8x-zSRKnujkvrpBJC1U83vj8Dphhkg-dP_j8izVA_pCBGTlZT0tzSs13hyelYjlgOttctFr33KDlYyljcPcct4Rhqg6KwrUI2fUQXnUNVuSXku4j8CYN9cyOQtPIX"
        }
      },
      {
        "id": 539206301,
        "recommendationText": "\u201cSourabh is one of the most thoughtful, knowledgeable and professional people in UI Development. He's got a passion for the design, development and testing of enterprise software, his understanding of the issues, his original ideas and his thorough execution. I have enjoyed all of our encounters and recommend him very highly",
        "recommendationType": {"code": "colleague"},
        "recommender": {
          "headline": "Tech Lead at Cigniti Technologies",
          "pictureUrl": "https://media.licdn.com/mpr/mprx/0_fobGOo_vJPaJ5_ktuaACVpCNyT2J51e_QUguRx7N46iZ5_H_EaA_xaCv0-O5QALtSHxCv2SzzX14_cW7LMCO9OhJKX1M_Bu18MC3j0zqUL6zWTB72Hq7gwRLrldWoBRGdV6asDCF5N1"
        }
      },
      {
        "id": 523992311,
        "recommendationText": "Sourabh is very good team player and hard worker. I am very be comfortable while working with him.",
        "recommendationType": {"code": "colleague"},
        "recommender": {
          "headline": "Senior Software Engineer  at TechAspect Solutions",
          "pictureUrl": "https://media.licdn.com/mpr/mprx/0_bvDvUWhlH8SqrfJubBxoUotaHkHNKEduLtJoUoAmcTpk7aO2IPjMzE586oew1SH8QnfwNSiadZfZ"
        }
      },
      {
        "id": 519826281,
        "recommendationText": "Sourabh is a great project partner, I really enjoyed as worked with him.. This is very timely as I'm about to write my first recommendation for a colleague. Sourabh is extremely enthusiastic about his work which is infectious. I certainly would recommend him for any helps in projects or discussions.",
        "recommendationType": {"code": "colleague"},
        "recommender": {
          "headline": "Senior Software Developer at NeoSOFT Technologies (A CMMi Level 5 Organization)",
          "pictureUrl": "https://media.licdn.com/mpr/mprx/0_xbbVGXiPFWb09f_My_xNorTtLS5YP0aWV_1VFrftkgb0PfgL191VoGDPCH9Sv7yXP91VfTG1HaqxrR5zPqC6ori0SaqOrRJ5PqCJ3A9-Qf3tVDGJ05qBT54iDUaaMRmNVB69Q_vl_8G"
        }
      }
    ]
  },
  "skills": {
    "_total": 44,
    "values": [
      {
        "id": 1,
        "skill": {"name": "Java"}
      },
      {
        "id": 2,
        "skill": {"name": "C"}
      },
      {
        "id": 3,
        "skill": {"name": "SQL"}
      },
      {
        "id": 4,
        "skill": {"name": "C++"}
      },
      {
        "id": 5,
        "skill": {"name": "HTML"}
      },
      {
        "id": 6,
        "skill": {"name": "MySQL"}
      },
      {
        "id": 7,
        "skill": {"name": "JavaScript"}
      },
      {
        "id": 8,
        "skill": {"name": "Core Java"}
      },
      {
        "id": 10,
        "skill": {"name": "Microsoft Office"}
      },
      {
        "id": 21,
        "skill": {"name": "JSP"}
      },
      {
        "id": 22,
        "skill": {"name": "Servlets"}
      },
      {
        "id": 23,
        "skill": {"name": "Java Enterprise Edition"}
      },
      {
        "id": 29,
        "skill": {"name": "Software Development"}
      },
      {
        "id": 31,
        "skill": {"name": "Struts"}
      },
      {
        "id": 32,
        "skill": {"name": "JDBC"}
      },
      {
        "id": 36,
        "skill": {"name": "J2EE Web Services"}
      },
      {
        "id": 37,
        "skill": {"name": "J2ME Development"}
      },
      {
        "id": 38,
        "skill": {"name": "Perl Script"}
      },
      {
        "id": 39,
        "skill": {"name": "Flex"}
      },
      {
        "id": 40,
        "skill": {"name": "XSLT"}
      },
      {
        "id": 41,
        "skill": {"name": "Linux"}
      },
      {
        "id": 42,
        "skill": {"name": "Oracle"}
      },
      {
        "id": 45,
        "skill": {"name": "AJAX"}
      },
      {
        "id": 46,
        "skill": {"name": "jQuery"}
      },
      {
        "id": 53,
        "skill": {"name": "Eclipse"}
      },
      {
        "id": 64,
        "skill": {"name": "XML"}
      },
      {
        "id": 65,
        "skill": {"name": "ASP.NET"}
      },
      {
        "id": 66,
        "skill": {"name": "Hibernate"}
      },
      {
        "id": 68,
        "skill": {"name": "Tomcat"}
      },
      {
        "id": 69,
        "skill": {"name": "C#"}
      },
      {
        "id": 80,
        "skill": {"name": "CSS"}
      },
      {
        "id": 81,
        "skill": {"name": "HTML 5"}
      },
      {
        "id": 82,
        "skill": {"name": "Web Development"}
      },
      {
        "id": 86,
        "skill": {"name": "XHTML"}
      },
      {
        "id": 87,
        "skill": {"name": "JSON"}
      },
      {
        "id": 88,
        "skill": {"name": "Front-end"}
      },
      {
        "id": 89,
        "skill": {"name": "Programming"}
      },
      {
        "id": 90,
        "skill": {"name": "CMS"}
      },
      {
        "id": 538185457,
        "skill": {"name": "HTML5"}
      },
      {
        "id": 1089723974,
        "skill": {"name": "User Interface"}
      },
      {
        "id": 1089728536,
        "skill": {"name": "User Interface Design"}
      },
      {
        "id": 9,
        "skill": {"name": "Mobile Applications"}
      },
      {
        "id": 11,
        "skill": {"name": "JavaServer Pages (JSP)"}
      },
      {
        "id": 12,
        "skill": {"name": "Cascading Style Sheets (CSS)"}
      }
    ]
  },
  "summary": "Hi\n\nI am Interactive UI developer with 4 years of professional experience, participated in large corporate web sites development. Interested in user-focused standards-based front end web development.\n\nSpecialties: html5, css3, Standard based Cross Browser Development, Object Oriented JavaScript\n\nFrameworks/JS Libraries:\njQuery, jQueryMobile, HandlebarJS, requireJS, Angular js , Hybrid Mobile app using cordova\n\nIDEs:\nEclipse ,Sublime Text ,Brackets\n\nCMS: \nWorking knowledge in Adobe CQ , TeamSite\n\nOperating System:\nWindows, Linux, Mac.\n\nBackground in graphic design, software programming and web development\n.\nTo work on HTML Based on Mockups/PSD\nDo testing of the page in terms of typography, alignment, colors, browsers & OS\n\nAttention to detail, customer-service orientation, and creativity in problem-solving.\nExperience in HTML; XHTML and other web languages and methods for standard and mobile websites.\n\nExpert Knowledge and demonstrated experience with cross-browser and cross-platform issues for modern browsers and mobile devices\nEmerging concepts and technologies like HTML5, CSS3, and responsive web design\nWriting front-end code that follows software design principles - flexible, reusable, and consistent\n\ni have the ability to create interesting WebPages while keeping them user friendly. I have excellent time management and organizational skills with the ability to meet tight deadlines. I also possess outstanding verbal and writing skills with the ability to communicate with different departments, executives and clients efficiently. \n\nI am a self-starter with the ability to take control of the situation and work independently to get the job done. However, I am also a team player and I enjoy sharing ideas and information with other professionals in order to get the best possible results for all projects.",
  "threeCurrentPositions": {
    "_total": 1,
    "values": [{
      "company": {
        "id": 9956,
        "industry": "Computer Software",
        "name": "RealPage, Inc.",
        "size": "1001-5000",
        "type": "Public Company"
      },
      "id": 762216115,
      "isCurrent": true,
      "location": {
        "country": {
          "code": "in",
          "name": "India"
        },
        "name": "Hyderabad Area, India"
      },
      "startDate": {
        "month": 1,
        "year": 2016
      },
      "title": "Software Developer"
    }]
  },
  "threePastPositions": {
    "_total": 2,
    "values": [
      {
        "company": {
          "id": 107629,
          "industry": "Information Technology & Services",
          "name": "TechAspect",
          "size": "201-500",
          "type": "Privately Held"
        },
        "endDate": {
          "month": 12,
          "year": 2015
        },
        "id": 429385048,
        "isCurrent": false,
        "location": {"name": "Hyderabad Area, India"},
        "startDate": {
          "month": 12,
          "year": 2012
        },
        "title": "UI Developer"
      },
      {
        "company": {
          "id": 1449,
          "industry": "Entertainment",
          "name": "Electronic Arts",
          "size": "5001-10000",
          "ticker": "EA",
          "type": "Public Company"
        },
        "endDate": {
          "month": 11,
          "year": 2012
        },
        "id": 347998721,
        "isCurrent": false,
        "location": {"name": "Hyderabad"},
        "startDate": {
          "month": 6,
          "year": 2012
        },
        "title": "Software Trainee"
      }
    ]
  },
  "volunteer": {
    "causes": {
      "_total": 7,
      "values": [
        {"name": "artsAndCulture"},
        {"name": "children"},
        {"name": "civilRights"},
        {"name": "humanitarianRelief"},
        {"name": "education"},
        {"name": "povertyAlleviation"},
        {"name": "socialServices"}
      ]
    },
    "opportunities": {
      "boardMember": true,
      "proBono": true
    }
  }
}

    )




linked.save(function(err, result) {
    console.log('saves sucessfully');
    console.log("result", result);
    console.log("error", err);
});