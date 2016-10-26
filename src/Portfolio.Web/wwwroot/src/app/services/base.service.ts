import '../../rxjs-operators';
import 'rxjs/add/operator/map';

import {Injectable, Optional} from '@angular/core';
import {Http, Headers, Response, RequestOptions, URLSearchParams} from '@angular/http';
import { Observable }  from 'rxjs/Observable';
import {IResult} from '../models/result';

@Injectable()
export class BaseApiService<TEntity> {

    constructor(@Optional() private http: Http) {

    }

    get(): Observable<Array<TEntity>> {
        return this.http.get('/api/users').map(this.extractData).catch(this.handleError);
    }

    getById(id: string): Observable<TEntity> {
        return this.http.get('/api/users').map(this.extractData).catch(this.handleError);
    }

    post(entity: TEntity): Observable<IResult> {
        let body = JSON.stringify({ name });
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        return this.http.post('', body, options)
            .map(this.extractData)
            .catch(this.handleError);
    }

    put(entity: TEntity): Observable<IResult> {
        let body = JSON.stringify({ name });
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        return this.http.put('', body, options)
            .map(this.extractData)
            .catch(this.handleError);
    }

    del(id : string): Observable<IResult> {
        return this.http.get('').map(this.extractData).catch(this.handleError);
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