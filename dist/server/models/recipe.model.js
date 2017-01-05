'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Create a `schema` for the `Todo` object
var recipeSchema = new _mongoose2.default.Schema({
  title: { type: String },
  tags: { type: Array },
  rating: { type: Number },
  creator: { type: String },
  description: { type: String },
  ingredients: [{
    amount: {
      type: String
    },

    unit: {
      type: String
    },

    name: {
      type: String
    }
  }],
  directions: { type: Array }
});

// Expose the model so that it can be imported and used in
// the controller (to search, delete, etc.)

// */app/models/recipe.model.js*

// # Recipe Model

// Note: MongoDB will autogenerate an _id for each Recipe object created

// Grab the Mongoose module
exports.default = _mongoose2.default.model('Recipe', recipeSchema);
//# sourceMappingURL=recipe.model.js.map