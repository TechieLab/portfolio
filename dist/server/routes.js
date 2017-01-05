'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _authenticationRouter = require('./routes/_authentication.router.js');

var _authenticationRouter2 = _interopRequireDefault(_authenticationRouter);

var _todoRouter = require('./routes/_todo.router.js');

var _todoRouter2 = _interopRequireDefault(_todoRouter);

var _recipeRouter = require('./routes/_recipe.router.js');

var _recipeRouter2 = _interopRequireDefault(_recipeRouter);

var _blogpostRouter = require('./routes/_blogpost.router.js');

var _blogpostRouter2 = _interopRequireDefault(_blogpostRouter);

var _projectworkRouter = require('./routes/_projectwork.router.js');

var _projectworkRouter2 = _interopRequireDefault(_projectworkRouter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//Load our API routes for the 'blog posts' component


// Load our API routes for the `todo` component
exports.default = function (app, router, passport) {

  // ### Express Middlware to use for all requests
  router.use(function (req, res, next) {

    console.log('I sense a disturbance in the force...'); // DEBUG

    // Make sure we go to the next routes and don't stop here...
    next();
  });

  // Define a middleware function to be used for all secured routes
  var auth = function auth(req, res, next) {

    if (!req.isAuthenticated()) res.send(401);else next();
  };

  // Define a middleware function to be used for all secured administration
  // routes
  var admin = function admin(req, res, next) {

    if (!req.isAuthenticated() || req.user.role !== 'admin') res.send(401);else next();
  };

  // ### Server Routes

  // Handle things like API calls,

  // #### Authentication routes

  // Pass in our Express app and Router.
  // Also pass in auth & admin middleware and Passport instance
  (0, _authenticationRouter2.default)(app, router, passport, auth, admin);

  // #### RESTful API Routes

  // Pass in our Express app and Router
  (0, _todoRouter2.default)(app, router);

  (0, _recipeRouter2.default)(app, router);

  (0, _blogpostRouter2.default)(app, router);

  (0, _projectworkRouter2.default)(app, router);

  // All of our routes will be prefixed with /api
  app.use('/api', router);

  // ### Frontend Routes

  // Route to handle all Angular requests
  app.get('/', function (req, res) {

    var request_url = 'https://www.linkedin.com/oauth/v2/authorization?response_type=code&client_id=75nwsrs8dwshgk&redirect_uri=http://localhost:3030&state=996302&scope=r_basicprofile';
    // Load our src/app.html file
    //** Note that the root is set to the parent of this folder, ie the app root **
    res.render('index.html');
    // res.redirect(request_url);
  });

  // Route to handle all Angular requests
  app.get('/*', function (req, res) {

    // Load our src/app.html file
    //** Note that the root is set to the parent of this folder, ie the app root **
    res.redirect('/');
  });

  /*  app.get('/app.bundle.js', function (req, res) {
  
     // Load our src/app.html file
     //** Note that the root is set to the parent of this folder, ie the app root **
     res.sendFile('/dist/app.bundle.js', { root: __dirname + "/../" });
   }); */
};

//Load our API routes for the 'blog posts' component


// Load our API routes for the `recipe` component

// */app/routes.js*

// ## Node API Routes

// Define routes for the Node backend

// Load our API routes for user authentication
//# sourceMappingURL=routes.js.map