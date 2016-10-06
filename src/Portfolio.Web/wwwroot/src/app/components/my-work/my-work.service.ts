import {Injectable} from '@angular/core';
import {Http} from '@angular/http';

import 'rxjs/add/operator/toPromise';

@Injectable()

export class MyWorkService{
  

  constructor(private http:Http){
      
  } 
  
  getProjectList(){
     return this.http.get('/api/projectlist');
  }
  
}