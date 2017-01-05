'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _projectWork = require('../models/projectWork.model');

var _projectWork2 = _interopRequireDefault(_projectWork);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (app, router) {

  // ## Recipe API Routes

  // Define routes for the `recipe` API

  router.route('/projectlist').get(function (req, res) {

    // Use mongoose to get all blog items in the database
    _projectWork2.default.find(function (err, projectlist) {
      console.log('result' + projectlist);
      if (err) res.send(err);else res.json(projectlist);
    });
  });

  router.route('/projectlist/:title').get(function (req, res) {

    // Use mongoose to get all blog items in the database
    _projectWork2.default.find({ link: req.params.title }, function (err, response) {
      if (err) res.send(err);else res.json(response);
    });
  });
};
//
//# sourceMappingURL=_projectwork.router.js.map