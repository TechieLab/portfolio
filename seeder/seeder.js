var mongoose = require('mongoose');
var express = require('express');
var mongoosePaginate = require('mongoose-paginate');
var app =  express();

var blogpost =  require('../dist/server/models/blogPosts.model');



//console.log(blog)

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/sourabhblog');


/*db.BlogPost.save(
   [
     { 
         title: 'Start Bootstrap Moves to MIT Licensing',
         link:'http://www.google.com',
         description: 'All of the free templates and themes on Start Bootstrap are now licensed under the MIT license instead of Apache 2.0.' + 
                  'The MIT license is simple, and it allows you to do just about anything you want with the templates.',
        created_at: "2017-08-10T17:53:55.433Z"

     } 
   ]
)  */


var blogs = [ 
        new blogpost({
            title: 'Start Bootstrap Moves to MIT Licensing',
            link:'http://www.google.com',
            description: 'All of the free templates and themes on Start Bootstrap are now licensed under the MIT license instead of Apache 2.0.' + 
                  'The MIT license is simple, and it allows you to do just about anything you want with the templates.'
        }),
        new blogpost({
            title: 'Start Bootstrap Templates Now Have Their Own Repo',
            link: 'http://www.google.com',
            description:'By popular demand I have finally pulled all of the templates on Start Bootstrap into their own personal GitHub repository! What this means is that you can easily fork a template to start a new project directly in GitHub.',
            created_at: "2017-08-10T17:53:55.433Z"
            
        }),
        new blogpost({
            title: 'New ‘Clean Blog’ Theme on Start Bootstrap',
            link: 'http://www.google.com',
            description:'A new theme is up on Start Bootstrap! The ‘Clean Blog’ theme is a modern, four page blog theme optimized for legibility. The theme features a hint of color, an intuitive navigation bar, and a working contact form among other features',
            created_at: "2017-08-10T17:53:55.433Z"
            
        }),
         new blogpost({
            title: 'New ‘Clean Blog’ Theme on Start Bootstrap',
            link: 'http://www.google.com',
            description:'A new theme is up on Start Bootstrap! The ‘Clean Blog’ theme is a modern, four page blog theme optimized for legibility. The theme features a hint of color, an intuitive navigation bar, and a working contact form among other features',
            created_at: "2015-08-10T17:53:55.433Z"
            
            
        }),
         new blogpost({
            title: 'New ‘Clean Blog’ Theme on Start Bootstrap',
            link: 'http://www.google.com',
            description:'A new theme is up on Start Bootstrap! The ‘Clean Blog’ theme is a modern, four page blog theme optimized for legibility. The theme features a hint of color, an intuitive navigation bar, and a working contact form among other features',
            created_at: "2014-08-10T17:53:55.433Z"
            
            
        }),
        new blogpost({
            title: 'New ‘Clean Blog’ Theme on Start Bootstrap',
            link: 'http://www.google.com',
            description:'A new theme is up on Start Bootstrap! The ‘Clean Blog’ theme is a modern, four page blog theme optimized for legibility. The theme features a hint of color, an intuitive navigation bar, and a working contact form among other features',
            created_at: "2014-08-10T17:53:55.433Z"
            
            
        }),
        new blogpost({
            title: 'New ‘Clean Blog’ Theme on Start Bootstrap',
            link: 'http://www.google.com',
            description:'A new theme is up on Start Bootstrap! The ‘Clean Blog’ theme is a modern, four page blog theme optimized for legibility. The theme features a hint of color, an intuitive navigation bar, and a working contact form among other features',
            created_at: "2014-08-10T17:53:55.433Z"
            
            
        })
        ]
    
  var count = 0;
  for(var i = 0;i<blogs.length;i++){
      blogs[i].save(function(err,result){
           console.log('saves sucessfully');
           console.log(result);

      });
     
    
  } 
