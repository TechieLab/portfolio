import {Component} from '@angular/core';
import {ProfileService} from './profile.service';

@Component({
    selector:'profile',
    template:require('./profile.html'),
    providers:[ProfileService]
})

export class ProfileComponent{
     postItem:Array<Object>;
     errorMessage: boolean = false;
     
    constructor(private profile_service:ProfileService){
        this.getProfile();
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