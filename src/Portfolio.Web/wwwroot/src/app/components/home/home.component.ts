import {Component, OnInit, ElementRef} from '@angular/core';
import {window} from '@angular/platform-browser/src/facade/browser';
import {ProfileComponent} from '../profile/profile.component';
import {ProfileWidgetComponent} from '../profile-widget/profile-widget.component';
import {ProfileAboutWidgetComponent} from '../profile-about-widget/profile-about-widget.component';
import {FeedComponent} from '../feed/feed.component';
import {HomeService} from './home.services';
import {UserService} from '../../services/userService';

@Component({
    selector: 'home',
    template: require('./home.html'),
    providers: [HomeService, UserService],
    entryComponents: [ProfileComponent, ProfileWidgetComponent, ProfileAboutWidgetComponent, FeedComponent]
})

export class HomeComponent implements OnInit {
    private item: Array<any>;
    private errorMessage: boolean;

    constructor(public userService: UserService) {

    }

    performSearch() {
        let self = this;
        this.userService.getUsers().subscribe(function (response: any) {
            self.item = JSON.parse(response._body);
            if (!self.item.length) {
                self.errorMessage = true;
            }
        });
    }

    ngOnInit() {
        // temporary code for removing loader
        //window.$('body').addClass('grid-loaded');
    }
}