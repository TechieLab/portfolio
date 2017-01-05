'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _userModel = require('../models/user.model.js');

var _userModel2 = _interopRequireDefault(_userModel);

var _linkedinModel = require('../models/Linkedin/linkedin.model.js');

var _linkedinModel2 = _interopRequireDefault(_linkedinModel);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// */app/routes/_authentication.router.js*

// GET    */api/auth/user*        Get user data from session object in
//                                Node

// GET    */api/auth/loggedin*    Route to test if the user is logged in
//                                or not

// POST   */api/auth/login*       Route to login

// POST   */api/auth/logout*      Route to logout and redirect to the
//                                appropriate view

// ## Authentication API object

// Load user model
var stringify = require("json-stringify-safe");

var https = require("https");
var HttpsProxyAgent = require('https-proxy-agent');
var request = require('request');
var proxy = 'http://localhost:3030/';
var agent = new HttpsProxyAgent(proxy);

// Load the Mongoose ObjectId function to cast string as
// ObjectId
var ObjectId = require('mongoose').Types.ObjectId;

exports.default = function (app, router, passport, auth, admin) {

  router.get('/getlinkedIn', function (req, res) {

    var options = {
      url: 'https://api.linkedin.com/v1/people/~:(id,num-connections,num-connections-capped,first-name,last-name,emailAddress,headline,picture-url,industry,summary,specialties,positions:(id,title,summary,start-date,end-date,is-current,company:(id,name,type,size,industry,ticker)),educations:(id,school-name,field-of-study,start-date,end-date,degree,activities,notes),associations,interests,num-recommenders,date-of-birth,publications:(id,title,publisher:(name),authors:(id,name),date,url,summary),patents:(id,title,summary,number,status:(id,name),office:(name),inventors:(id,name),date,url),languages:(id,language:(name),proficiency:(level,name)),skills:(id,skill:(name)),certifications:(id,name,authority:(name),number,start-date,end-date),courses:(id,name,number),recommendations-received:(id,recommendation-type,recommendation-text,recommender:(picture-url,headline,firstName,lastName)),honors-awards,three-current-positions,three-past-positions,volunteer)?oauth2_access_token=AQWN072mbxlACRWqGg8WcFSDZ8gfD6AxUH23xUH_LvqO1Rd_5IHdyhZjd9VfwverixXQbphIw_XDqNYXblHEpqm90uoiYma5yx4Rx0grAKYUIKEMRRgkPaaQtFDOrK_37R84wwUxQjKWkGAERg8nzGgXDQocgASOqWYoZTxzS0ANm9Bi0vk&format=json',
      headers: {
        'User-Agent': 'request'
      }
    };

    function callback(error, response, body) {

      if (!error && response.statusCode == 200) {
        var info = JSON.parse(body);

        var linked = new _linkedinModel2.default(info);

        linked.save(function (err, result) {
          console.log('saves sucessfully');
          console.log("result", result);
          console.log("error", err);
        });
        res.sendStatus(200);
      } else {
        if (error) {
          res.sendStatus(500);
        }
      }
    }

    request(options, callback);
  });

  router.get('/linkedin', function (req, res) {
    // Use mongoose to get all blog items in the database
    _linkedinModel2.default.find(function (err, response) {

      if (err) res.send(err);else res.json(response[response.length - 1]);
    });
  });
};
//# sourceMappingURL=_authentication.router.js.map