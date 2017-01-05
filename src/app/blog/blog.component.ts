import {window} from '@angular/platform-browser/src/facade/browser';
import {Component} from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

import {PagerService} from '../../service/pager.service';
import {BlogService} from './blog.service';

import {DateFilter} from '../../pipes/dateFilter';




@Component({
    template:require('./blog.html'),
    pipes:[DateFilter],
    providers:[BlogService,PagerService],
     directives: [ROUTER_DIRECTIVES]
})

export class BlogComponent{
     items: Array<any>;
     postItem:Array<Object>;
     errorMessage: boolean = false;
    
     // array of all items to be paged
     private allItems: any[];
 
     // pager object
     pager: any = {};
 
     // paged items
     pagedItems: any[];

    constructor(private blogService:BlogService,private pagerService: PagerService){
         this.getBlog();
         window.$('body').removeClass('grid-loaded');
    }

    getBlog(){
       let self = this;
        this.blogService.getBlogList().subscribe((response:any) => {
            
               this.postItem = JSON.parse(response._body);
               this.allItems = JSON.parse(response._body);
               // initialize to page 1
               this.setPage(1);
                window.$('body').addClass('grid-loaded');
              if(!this.postItem.length){
                  this.errorMessage = true;
               }
          });
    }

    incrementVote(index:any, blog:any){
         let self = this;
        this.blogService.getIncrementCount(blog).subscribe((response:any) => {
            
               this.postItem = JSON.parse(response._body);
               this.pagedItems[index] = this.postItem;
               if(!this.postItem.length){
                   this.errorMessage = true;
               }
          });
    }

    decrementVote(index:any,blog:any){
        let self = this;
        this.blogService.getDecrementCount(blog).subscribe((response:any) =>{
            
               this.postItem = JSON.parse(response._body);
               this.pagedItems[index] = this.postItem;
              if(!this.postItem.length){
                  this.errorMessage = true;
               }
          });
    }

    setPage(page:number){
         if (page < 1 || page > this.pager.totalPages) {
            return;
        }
 
        // get pager object from service
        this.pager = this.pagerService.getPager(this.allItems.length, page);
 
        // get current page of items
        this.pagedItems = this.allItems.slice(this.pager.startIndex, this.pager.endIndex + 1);
    }
}