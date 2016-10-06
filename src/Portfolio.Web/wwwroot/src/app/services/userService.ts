import {Injectable} from '@angular/core';
import {Http, Headers, RequestOptions, URLSearchParams} from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class UserService {


    constructor(private http: Http) {

    }

    getUsers() {
        return this.http.get('/api/users');
    }

    searchUsers(searchText: string) {
        let body = JSON.stringify({ name });
        let headers = new Headers({ 'Content-Type': 'application/json' });
        
        let params = new URLSearchParams();
        params.set('q', searchText);

        let options = new RequestOptions({ headers: headers, search: params });

        return this.http.get('/api/users/search', options);
    }
}