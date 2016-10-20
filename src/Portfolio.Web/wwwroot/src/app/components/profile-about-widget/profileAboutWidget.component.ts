import {Component} from '@angular/core';
import {ProfileAboutWidgetService} from './profile-about-widget.service';

@Component({
  selector: 'profile-about-widget',
  template: require('./profileAboutWidget.html'),
  providers: [ProfileAboutWidgetService]
 
})

export class ProfileAboutWidgetComponent{

    private Item: Array<Object>;
    private errorMessage: boolean = false;
    private username: String = 'laz3yduck408';
   
    constructor(private profileAboutService: ProfileAboutWidgetService ) { 
        this.getUserInfo();
    }

    getUserInfo() {
       
        let self = this;
        this.profileAboutService.getUserInfo(this.username).subscribe(function (response: any) {

            self.Item = JSON.parse(response._body);
            if (!self.Item.length) {
                self.errorMessage = true;
            }
        });
    }
}