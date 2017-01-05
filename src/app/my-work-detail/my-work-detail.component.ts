import {Component} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ROUTER_DIRECTIVES } from '@angular/router';
import {FeedComponent} from '../feed/feed.component';
import {MyWorkService} from '../my-work/my-work.service';
import {window} from '@angular/platform-browser/src/facade/browser';

@Component({
   template:require('./my-work-detail.html'),
   providers:[MyWorkService],
   directives:[FeedComponent,ROUTER_DIRECTIVES]
})

export class MyWorkDetailComponent{
  title: any;
  paramsSub: any;
  content:any;
  errorMessage:boolean;
  projectList:any;
  projectImageGallery:Array<string>;
 

  constructor(private activatedRoute: ActivatedRoute,private workService:MyWorkService) { 
     
  }

   ngOnInit() {
    var self = this; 
    this.paramsSub = this.activatedRoute.params.subscribe(function(params){
       self.title = params['title'];
       self.getProjectContent(self.title); 
    });

    
  
  }

  getProjectContent(projectTitle){   
      let self = this;
      let _self = this;
      
      //Main projects 
      this.workService.getProjectDescription(projectTitle).subscribe(function(response:any){
               var target = {};
               Object.assign(target,JSON.parse(response._body)[0]);
               self.content = target;
               self.setImagePath(self.content);
              if(!self.content.length){
                  self.errorMessage = true;
               }
          });
     //Related projects api
     this.workService.getProjectList().subscribe(function(response:any){
              self.projectList = JSON.parse(response._body);
              self.setRelatedProjectsImageList(self.projectList);
              if(!self.content.length){
                  self.errorMessage = true;
               }
     });    
  }

  setRelatedProjectsImageList(arr){
      let self = this;
      var imgPath = '';
      arr.forEach(element => {
            imgPath = "/./assets/images/work/"+ element.displayImage + '.png';
            element.displayImage = imgPath;
      });

       setTimeout(function(){
       window.$('.owl-carousel').owlCarousel({
            loop:true,
            margin:10,
            nav:true,
            responsive:{
                0:{
                    items:1
                },
                600:{
                    items:3
                },
                1000:{
                    items:4
                }
            }
        })
        },500);
        


  }
  setImagePath(arr){
      let self = this;
      var imgPath = '';
      self.projectImageGallery = [];
      arr.images.forEach(element => {
                   imgPath = "/./assets/images/work/"+ element + '.png';
                   self.projectImageGallery.push(imgPath); 
      });
      setTimeout(function(){
          window.$('.carousel-inner .item:first-child').addClass('active');
     },500);
     
  } 
  
  ngOnDestroy() {
    this.paramsSub.unsubscribe();
  }
}