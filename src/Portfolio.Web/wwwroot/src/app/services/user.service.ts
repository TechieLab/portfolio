import '../../rxjs-operators';

import {Injectable} from '@angular/core';
import {Http, Headers, Response, RequestOptions, URLSearchParams} from '@angular/http';

import { Observable }  from 'rxjs/Observable';
import {IUser} from '../models/user';

@Injectable()
export class UserService {

    constructor(private http: Http) {

    }

    getUsers(): Observable<Array<IUser>>{
        return this.http.get('/api/users').map(this.extractData).catch(this.handleError);
    }

    getUserByName(userName: string): Observable<IUser> {
        //let body = JSON.stringify({ userName });
        //let headers = new Headers({ 'Content-Type': 'application/json' });

        //let params = new URLSearchParams();
        //params.set('username', userName);

        //let options = new RequestOptions({ headers: headers, search: params });

        return this.http.get('/api/users/'+ userName);
    }

    searchUsers(searchText: string) {
        let body = JSON.stringify({ name });
        let headers = new Headers({ 'Content-Type': 'application/json' });
        
        let params = new URLSearchParams();
        params.set('q', searchText);

        let options = new RequestOptions({ headers: headers, search: params });

        return this.http.get('/api/users/search', options);
    }

    private extractData(res: Response) {
        let body = res.json();
        return body.data || {};
    }

    private handleError(error: any) {
        // In a real world app, we might use a remote logging infrastructure
        // We'd also dig deeper into the error to get a better message
        let errMsg = (error.message) ? error.message :
            error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        console.error(errMsg); // log to console instead
        return Observable.throw(errMsg);
    }
}