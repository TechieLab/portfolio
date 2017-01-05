'use strict';

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();

var Schema = _mongoose2.default.Schema;

var projectworkschema = new Schema({
  title: String,
  link: String,
  description: { type: String, required: true },
  created_at: Date,
  date_label: String,
  images: Array,
  displayImage: String

});

// on every save, add the date
projectworkschema.pre('save', function (next) {

  // get the current date
  var currentDate = new Date();

  // if created_at doesn't exist, add to that field
  if (!this.created_at) {
    this.created_at = currentDate;
    this.date_label = this.created_at.toDateString();
  } else {
    this.date_label = this.created_at.toDateString();
  }

  next();
});

var Projects = _mongoose2.default.model('projectwork', projectworkschema);

//export default mongoose.model('BlogPost', BlogPostschema,'BlogPost');

module.exports = Projects;
//# sourceMappingURL=projectWork.model.js.map