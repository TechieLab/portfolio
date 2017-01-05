'use strict';

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _mongoosePaginate = require('mongoose-paginate');

var _mongoosePaginate2 = _interopRequireDefault(_mongoosePaginate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var fs = require('fs');

var app = (0, _express2.default)();

var Schema = _mongoose2.default.Schema;

var blogpostschema = new Schema({
    title: String,
    description: { type: String, required: true },
    link: String,
    created_at: Date,
    updated_at: Date,
    date_label: String,
    img: { data: Buffer, contentType: String },
    pageUrl: String,
    upvotes: { type: Number, default: 0 },
    downvotes: { type: Number, default: 0 },
    comments: [{
        name: String,
        firstL: String,
        comment: String
    }]
});

blogpostschema.plugin(_mongoosePaginate2.default);

// on every save, add the date
blogpostschema.pre('save', function (next) {
    // get the current date
    var currentDate = new Date();

    // change the updated_at field to current date
    this.updated_at = currentDate;

    //pageUrllink
    if (this._id && this.title) {
        var title = this.title.replace(/\W/g, '-');
        this.pageUrl = '/post/' + this._id + '/' + title;
    }

    // if created_at doesn't exist, add to that field
    if (!this.created_at) {
        this.created_at = currentDate;
        this.date_label = this.created_at.toDateString();
    } else {
        this.date_label = this.created_at.toDateString();
    }

    next();
});

var Blog = _mongoose2.default.model('blogpost', blogpostschema);

//export default mongoose.model('BlogPost', BlogPostschema,'BlogPost');

module.exports = Blog;
//# sourceMappingURL=blogPosts.model.js.map