import '../../rxjs-operators';

import {Injectable} from '@angular/core';
import { Observable }  from 'rxjs/Observable';
import {IUser} from '../models/user';

@Injectable()
export class ContextService {

    constructor() {

    }

    getContext(): Observable<Array<IUser>> {
       return localStorage.getItem('userContext');
    }

    setContext(userContext: IUser): void {
        localStorage.setItem('userContext', JSON.stringify(userContext));
    }        
}