import {Component} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';

import {ProfileService} from './profile.service';
import {IUser} from '../../models/user';
import {UserService} from '../../services/UserService';

@Component({
    selector:'profile',
    template:require('./profile.html'),
    providers:[ProfileService]
})

export class ProfileComponent{
     postItem:Array<Object>;
     errorMessage: boolean = false;
     code: Subscription;
     userResult: IUser;    

     constructor(private profile_service: ProfileService, private activatedRoute: ActivatedRoute, private userService: UserService){
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
        this.profile_service.getLinkedinProfile().subscribe(function(response:any){
               self.postItem = JSON.parse(response._body);
               console.log(self.postItem);
              if(!self.postItem.length){
                  self.errorMessage = true;
               }
          });
    }
}