'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.app = undefined;

var _envConf = require('./config/env.conf.js');

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _swig = require('swig');

var _swig2 = _interopRequireDefault(_swig);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _socket = require('socket.io');

var _socket2 = _interopRequireDefault(_socket);

var _http = require('http');

var _http2 = _interopRequireDefault(_http);

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

var _morgan = require('morgan');

var _morgan2 = _interopRequireDefault(_morgan);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _methodOverride = require('method-override');

var _methodOverride2 = _interopRequireDefault(_methodOverride);

var _passport = require('passport');

var _passport2 = _interopRequireDefault(_passport);

var _cookieParser = require('cookie-parser');

var _cookieParser2 = _interopRequireDefault(_cookieParser);

var _expressSession = require('express-session');

var _expressSession2 = _interopRequireDefault(_expressSession);

var _base = require('./sockets/base.js');

var _base2 = _interopRequireDefault(_base);

var _mongooseConf = require('./config/mongoose.conf.js');

var _mongooseConf2 = _interopRequireDefault(_mongooseConf);

var _passportConf = require('./config/passport.conf.js');

var _passportConf2 = _interopRequireDefault(_passportConf);

var _routes = require('./routes');

var _routes2 = _interopRequireDefault(_routes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Set up appropriate environment variables if necessary
(0, _envConf.validateEnvVariables)();

// # Modules

// Load Express
// *server.conf.js*

//  This is the file where we will:
//  - Configure our application
//  - Connect to our database
//  - Create our Mongoose models
//  - Define routes for our RESTful API
//  - Define routes for our frontend Angular application
//  - Set the app to listen on a port so we can view it in our browser

// # Node Env Variables

// Load Node environment variable configuration file

// Load Socket.io

// Load Node http module

// Create our app with Express
var app = (0, _express2.default)();
// Create a Node server for our Express app
var server = _http2.default.createServer(app);
// Integrate Socket.io
var io = _socket2.default.listen(server);
// Load Mongoose for MongoDB interactions

// Log requests to the console (Express 4)

// Pull information from HTML POST (express 4)

// Simulate DELETE and PUT (Express 4)

// PassportJS


// # Configuration

// Load Socket.io server functionality


(0, _base2.default)(io);

// Set the port for this app
var port = process.env.PORT || 8080;

// Load Mongoose config file for connecting to MongoDB instance


// Pass Mongoose configuration Mongoose instance
(0, _mongooseConf2.default)(_mongoose2.default);

// Import PassportJS configuration


// Pass Passport configuration our PassportJS instance
(0, _passportConf2.default)(_passport2.default);

app.all('/', function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  next();
});

if (process.env.NODE_ENV === 'development' || process.env.NODE_ENV === 'test')
  // Log every request to the console
  app.use((0, _morgan2.default)('dev'));

// Read cookies (needed for authentication)
app.use((0, _cookieParser2.default)());

// ## Get all data/stuff of the body (POST) parameters

// Parse application/json
app.use(_bodyParser2.default.json());
// Parse application/vnd.api+json as json
app.use(_bodyParser2.default.json({ type: 'application/vnd.api+json' }));
// Parse application/x-www-form-urlencoded
app.use(_bodyParser2.default.urlencoded({ extended: true }));

// Override with the X-HTTP-Method-Override header in the request. Simulate DELETE/PUT
app.use((0, _methodOverride2.default)('X-HTTP-Method-Override'));
// Set the static files location /public/img will be /img for users
//app.use(express.static(__dirname + '/dist/client'));
app.use(_express2.default.static(_path2.default.join(__dirname, '../client')));

// Register our templating engine
app.engine('html', _swig2.default.renderFile);

app.set('view engine', 'html');
app.set('views', __dirname + './dist/client');
app.set('view cache', false);

// ## Passport JS

// Session secret
app.use((0, _expressSession2.default)({

  secret: process.env.SESSION_SECRET,

  resave: true,

  saveUninitialized: true
}));

app.use(_passport2.default.initialize());

// Persistent login sessions
app.use(_passport2.default.session());

// ## Routes

// Get an instance of the express Router
var router = _express2.default.Router();

// Load our application API routes
// Pass in our express and express router instances


// Pass in instances of the express app, router, and passport
(0, _routes2.default)(app, router, _passport2.default);

// ### Ignition Phase

server.listen(port);

// Shoutout to the user
console.log('Wizardry is afoot on port ' + port);

// Expose app
exports.app = app;
//# sourceMappingURL=server.conf.js.map