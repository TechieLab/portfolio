﻿import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {Http, Headers, Response, RequestOptions, URLSearchParams} from '@angular/http';
import { Observable }  from 'rxjs/Observable';

import {BaseApiService} from '../../services/baseApiService';
import {IUser} from '../../models/user';
import {LoginModel} from './account.model';
import {IResult} from '../../models/result';

@Injectable()
export class AccountService {

    constructor(private http : Http, private _router: Router) {
       
    }

    logout(): Observable<IResult> {
        return this.http.get('api/account/logoff').map(this.extractData).catch(this.handleError);
    }

    authenticate(loginModel: LoginModel): Observable<IResult> {
        let body = JSON.stringify({
            LoginModel: {
                UserName: loginModel.userName,
                Password: loginModel.password
            }
        });
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        return this.http.post('api/account/authenticate', body, options)
            .map(this.extractData)
            .catch(this.handleError);        
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

    checkCredentials() {
        if (localStorage.getItem("user") === null) {
            this._router.navigate(['Login']);
        }
    }
}