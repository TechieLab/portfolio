import {it, describe, expect, beforeEach, inject} from '@angular/core/testing';
import {BlogComponent} from "./blog.component";
import {BlogService} from './blog.service';
import {PagerService} from '../../service/pager.service';
 
describe('BlogComponent Tests', () => {
    let list:BlogComponent;
   // let bservice:BlogService = new BlogService();
   // let pservice:PagerService = new PagerService();
 
    beforeEach(() => {
     //   list = new BlogComponent(bservice,pservice);
    });
 
    it('Should get 5 dogs', () => {
       // list.getBlog();
 
     //   expect(list.postItem.length).toBe(7);
        //expect(list.items).toEqual(['golden retriever', 'french bulldog', 'german shepherd', 'alaskan husky', 'jack russel terrier']);
    });
});