import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import { Observable }  from 'rxjs/Observable';
import {BaseService} from '../../services/base.service';
import {IProfile} from '../../models/profile';

@Injectable()
export class ProfileService extends BaseService<IProfile> {
    data: Array<Object>;

    constructor(public http: Http) {
        super(http, 'profile');
    }

    getProfile(id : string): Observable<IProfile> {
        return this.getByUserId(id);
    }

    importLinkedInProfile() {
        return this.http.get('api/linkedIn/profile-import')
    }
}