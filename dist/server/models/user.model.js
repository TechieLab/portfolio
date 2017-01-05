'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

var _bcryptNodejs = require('bcrypt-nodejs');

var _bcryptNodejs2 = _interopRequireDefault(_bcryptNodejs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Define the schema for the showcase item


// */app/models/user.model.js*

// ## User Model

// Note: MongoDB will autogenerate an _id for each User object created

// Grab the Mongoose module
var userSchema = _mongoose2.default.Schema({

  local: {

    username: { type: String, unique: true },

    password: String,

    email: { type: String, unique: true }
  },

  role: { type: String }
});

// ## Methods

// ### Generate a hash


// Import library to hash passwords
userSchema.methods.generateHash = function (password) {

  return _bcryptNodejs2.default.hashSync(password, _bcryptNodejs2.default.genSaltSync(8), null);
};

// ### Check if password is valid
userSchema.methods.validPassword = function (password) {

  return _bcryptNodejs2.default.compareSync(password, this.local.password);
};

// Create the model for users and expose it to the app
exports.default = _mongoose2.default.model('User', userSchema);
//# sourceMappingURL=user.model.js.map