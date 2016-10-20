import {Component, OnInit, ElementRef} from '@angular/core';
import {window} from '@angular/platform-browser/src/facade/browser';
import {ProfileComponent} from '../profile/profile.component';
import {ProfileWidgetComponent} from '../profile-widget/profile-widget.component';
import {ProfileAboutWidgetComponent} from '../profile-about-widget/profile-about-widget.component';
import {FeedComponent} from '../feed/feed.component';

@Component({
    selector: 'dashboard',
    template: require('./dashboard.html'),
    entryComponents: [ProfileComponent, ProfileWidgetComponent, ProfileAboutWidgetComponent, FeedComponent]
})

export class DashboardComponent implements OnInit {

    constructor() {

    }

    ngOnInit() {
        // temporary code for removing loader
        //window.$('body').addClass('grid-loaded');
    }
}