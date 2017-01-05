var mongoose = require('mongoose');
var express = require('express');

var app =  express();

var projectwork =  require('../dist/server/models/projectWork.model');



//console.log(blog)

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/sourabhblog');



var projects = [ 
        new projectwork({
            title: 'Apollo university of phoenix',
            link:'Apollo',
            description: 'All of the free templates and themes on Start Bootstrap are now licensed under the MIT license instead of Apache 2.0.' + 
                  'The MIT license is simple, and it allows you to do just about anything you want with the templates.',
            images:['Apollo-1','Apollo-2','Apollo-login'],
            displayImage:'Apollo-1'      
        }),
        new projectwork({
            title: 'Paychex',
            link:'Paychex',
            description: 'All of the free templates and themes on Start Bootstrap are now licensed under the MIT license instead of Apache 2.0.' + 
                  'The MIT license is simple, and it allows you to do just about anything you want with the templates.',
            images:['paychex-3','paychex-2','paychex-1'] ,
            displayImage:'paychex-1',
            created_at: "2017-08-10T17:53:55.433Z"
            
          }),
           new projectwork({
            title: 'Apolloedu',
            link:'Apolloedu',
            description: 'All of the free templates and themes on Start Bootstrap are now licensed under the MIT license instead of Apache 2.0.' + 
                  'The MIT license is simple, and it allows you to do just about anything you want with the templates.',
            images:['apolloedu-1','apolloedu-2','apolloedu-3'] ,
            displayImage:'apolloedu-1',
            created_at: "2017-08-10T17:53:55.433Z"
            
          }),
           new projectwork({
            title: 'Carees',
            link:'Carees',
            description: 'All of the free templates and themes on Start Bootstrap are now licensed under the MIT license instead of Apache 2.0.' + 
                  'The MIT license is simple, and it allows you to do just about anything you want with the templates.',
            images:['career-1','career-2','career-3'] ,
            displayImage:'career-1',
            created_at: "2017-08-10T17:53:55.433Z"
            
          }),
           new projectwork({
            title: 'Phoenix',
            link:'Phoenix',
            description: 'All of the free templates and themes on Start Bootstrap are now licensed under the MIT license instead of Apache 2.0.' + 
                  'The MIT license is simple, and it allows you to do just about anything you want with the templates.',
            images:['phoenix-3','phoenix-2','phoenix-3'] ,
            displayImage:'phoenix-3',
            created_at: "2017-08-10T17:53:55.433Z"
            
          }),
           new projectwork({
            title: 'West',
            link:'West',
            description: 'All of the free templates and themes on Start Bootstrap are now licensed under the MIT license instead of Apache 2.0.' + 
                  'The MIT license is simple, and it allows you to do just about anything you want with the templates.',
            images:['west-1','west-2','west-3'] ,
            displayImage:'west-3',
            created_at: "2017-08-10T17:53:55.433Z"
            
          }),
           new projectwork({
            title: 'BWE',
            link:'BWE',
            description: 'All of the free templates and themes on Start Bootstrap are now licensed under the MIT license instead of Apache 2.0.' + 
                  'The MIT license is simple, and it allows you to do just about anything you want with the templates.',
            images:['bwe-1','bwe-2','bwe-3'] ,
            displayImage:'bwe-1',
            created_at: "2017-08-10T17:53:55.433Z"
            
          }),
           new projectwork({
            title: 'AEM',
            link:'AEM',
            description: 'All of the free templates and themes on Start Bootstrap are now licensed under the MIT license instead of Apache 2.0.' + 
                  'The MIT license is simple, and it allows you to do just about anything you want with the templates.',
            images:['west-4','wests-1','wests-2'] ,
            displayImage:'west-4',
            created_at: "2017-08-10T17:53:55.433Z"
            
          }),
           new projectwork({
            title: 'Social',
            link:'Social',
            description: 'All of the free templates and themes on Start Bootstrap are now licensed under the MIT license instead of Apache 2.0.' + 
                  'The MIT license is simple, and it allows you to do just about anything you want with the templates.',
            images:['social-1','social-2','social-3'] ,
            displayImage:'social-2',
            created_at: "2017-08-10T17:53:55.433Z"
            
          }),
           new projectwork({
            title: 'MC',
            link:'MC',
            description: 'All of the free templates and themes on Start Bootstrap are now licensed under the MIT license instead of Apache 2.0.' + 
                  'The MIT license is simple, and it allows you to do just about anything you want with the templates.',
            images:['mc-1','mc-2','mc-3'] ,
            displayImage:'mc-1',
            created_at: "2017-08-10T17:53:55.433Z"
            
          })
        ]
    
  var count = 0;
  for(var i = 0;i<projects.length;i++){
      projects[i].save(function(err,result){
           console.log('saves sucessfully');
           console.log(result);

      });
     
    
  } 
