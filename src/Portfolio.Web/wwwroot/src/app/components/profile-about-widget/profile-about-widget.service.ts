import {Injectable} from '@angular/core';
import {Http} from '@angular/http';


import 'rxjs/add/operator/toPromise';

@Injectable()

export class ProfileAboutWidgetService {
   
    constructor(private http: Http) {
    }

    getUserInfo(username: String) {
        return this.http.get('api/users/' + username);
    }
}

 