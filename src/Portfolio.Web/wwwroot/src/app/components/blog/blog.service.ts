import {Injectable} from '@angular/core';
import {Http} from '@angular/http';

import 'rxjs/add/operator/toPromise';

@Injectable()

export class BlogService{
  APT_KEY: string = '75nwsrs8dwshgk';

  constructor(private http:Http){
      
  } 
  
  getBlogList(){
     return this.http.get('/api/blogs');
  }
  getIncrementCount(blog:any){
     console.log("item",blog);
     return this.http.put('/api/blogs/'+ blog._id + '/upvote',{});
  }
  getDecrementCount(blog:any){
    console.log("item",blog);
      return this.http.put('/api/blogs/'+ blog._id + '/downvote',{});
  }
}