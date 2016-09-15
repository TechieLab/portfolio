import mongoose from 'mongoose';
import express from 'express';

import mongoosePaginate from 'mongoose-paginate';

let app = express();

let  Schema = mongoose.Schema;

let  blogpostschema = new Schema({
    title:String,
    description:{type: String, required:true},
    link:String,
    created_at: Date,
    updated_at: Date,
    date_label:String,
    pageUrl:String,
    upvotes:{type: Number, default: 0},
    downvotes:{type: Number, default: 0} 
});
blogpostschema.methods.upvote = function (cb) {
    this.upvotes +=1;
    this.save(cb);
}
blogpostschema.methods.downvote = function (cb) {
    this.downvotes -=1;
    this.save(cb);
}

blogpostschema.plugin(mongoosePaginate);

// on every save, add the date
blogpostschema.pre('save', function(next) {
  // get the current date
  var currentDate = new Date();
  
  // change the updated_at field to current date
  this.updated_at = currentDate;
  
  //pageUrllink
  if(this._id && this.title){
      let title = this.title.replace(/\W/g,'-');
      this.pageUrl = '/post/' + this._id +'/'+ title;
  }

  // if created_at doesn't exist, add to that field
  if (!this.created_at){
    this.created_at = currentDate;
    this.date_label =  this.created_at.toDateString();
  }else{
      this.date_label =  this.created_at.toDateString();
  }

  next();
});

 
 var Blog =  mongoose.model('blogpost',blogpostschema)

 //export default mongoose.model('BlogPost', BlogPostschema,'BlogPost');

module.exports  = Blog;