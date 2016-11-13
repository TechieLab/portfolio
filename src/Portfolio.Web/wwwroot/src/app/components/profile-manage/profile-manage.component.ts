import { Component} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';

import {ProfileManageService} from './profile-manage.service';
import {IUser} from '../../models/user';
import {UserService} from '../../services/user.service';
import {IProfile} from '../../models/profile';

@Component({
    selector:'profile',
    template:require('./profile-manage.html'),
    providers: [ProfileManageService]
})

export class ProfileManageComponent{
     postItem:Array<Object>;
     errorMessage: boolean = false;
     code: Subscription;
     userResult: IUser;
     myProfile: IProfile;    

     constructor(private profileService: ProfileManageService, private activatedRoute: ActivatedRoute, private userService: UserService){
        this.getProfile();
     }

    ngOnInit() {
        this.code = this.activatedRoute.params.subscribe(params => {
            let username = params['username'];

            if (username) {
                this.userService.getUserByName(username).subscribe(res => this.userResult = res, error => this.errorMessage = <any>error);
            }
        });
    }

    getProfile(){
        let self = this;
        var userContext = JSON.parse(localStorage.getItem('user-context'));

        if (userContext) {
            this.profileService.getProfile(userContext.id).subscribe((response: IProfile) => this.myProfile = response);
        }        
    }

    importProfile() {
        window.location.href = '/external-login';
    }

    createProfile() {

    }
}