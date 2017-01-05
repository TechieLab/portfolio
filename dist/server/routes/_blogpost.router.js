'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _blogPosts = require('../models/blogPosts.model');

var _blogPosts2 = _interopRequireDefault(_blogPosts);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var fs = require('fs');
// 

exports.default = function (app, router) {

  // ## Recipe API Routes

  // Define routes for the `recipe` API

  router.route('/blogs').get(function (req, res) {
    // Use mongoose to get all blog items in the database
    _blogPosts2.default.find({}).exec(function (err, blogpost) {
      if (err) {
        console.log('blogs result', err);
        res.send(err);
      } else {
        console.log('blogs result', blogpost);
        res.json(blogpost);
      }
    });
  });

  router.route('/blogs/:blogId').get(function (req, res) {
    // Use mongoose to get particular blog items in the database
    _blogPosts2.default.findById(req.params.blogId, function (err, blog) {
      if (err) res.send(err);else res.json(blog);
    });
  });

  router.route('/blogs/:blog/upvote').put(function (req, res) {

    _blogPosts2.default.findById(req.params.blog, function (err, blog) {
      if (err) res.send(err);

      blog.upvotes += 1; // update the bears info
      // save the bear
      blog.save(function (err) {
        if (err) res.send(err);

        _blogPosts2.default.findById(req.params.blog, function (err, blog) {
          if (err) res.send(err);else res.json(blog);
        });
      });
    });
  });

  router.route('/blogs/:blog/downvote').put(function (req, res) {
    _blogPosts2.default.findById(req.params.blog, function (err, blog) {
      if (err) res.send(err);

      blog.downvotes -= 1; // update the bears info
      // save the bear
      blog.save(function (err) {
        if (err) res.send(err);

        // Use mongoose to get all blog items in the database
        _blogPosts2.default.findById(req.params.blog, function (err, blog) {
          if (err) res.send(err);else res.json(blog);
        });
      });
    });
  });

  //post data submit
  router.route('/api/blog/new').post(function (req, res) {
    _blogPosts2.default.find({}).exec(req, function (err, blog) {
      if (err) res.send(err);

      // save the bear
      blog.save(function (err) {
        if (err) res.send(err);

        _blogPosts2.default.find({}).exec(function (err, blogpost) {
          if (err) {
            console.log('blogs result', err);
            res.send(err);
          } else {
            console.log('blogs result', blogpost);
            res.json(blogpost);
          }
        });
      });
    });
  });
};
//# sourceMappingURL=_blogpost.router.js.map