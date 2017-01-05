import {Component, OnInit, ElementRef} from '@angular/core';
import {ProfileComponent} from '../profile/profile.component';
import {ProfileWidgetComponent} from '../profile-widget/profile-widget.component';
import {ProfileAboutWidgetComponent} from '../profile-about-widget/profile-about-widget.component';
import {FeedComponent} from '../feed/feed.component';
import {CarouselWidgetComponent} from '../carousel-widget/carousel-widget.component';
import {HomeService} from './home.service';

import {MobileWidgetComponent} from '../svg/mobile';
import {UIUXWidgetComponent} from '../svg/UI-UX';
import {ProductWidgetComponent} from '../svg/productdesign';
import {WebDesignWidgetComponent} from '../svg/webDesign';
import {WebDevelopmentWidgetComponent} from '../svg/WebDevelopment';

declare var $ : any;
declare var Highcharts : any;

@Component({
  selector: 'home',
  template: require('./home.html'),
  providers: [HomeService]  
})

export class HomeComponent implements OnInit {
  listItem: Array<Object>;
  errorMessage: boolean = false;

  constructor(private homeService: HomeService, private window: Window) {
    this.loadLikedInProfile();
  }

  loadLikedInProfile() {
    let self = this;
    this.homeService.loadLinkedin().subscribe(function (response: any) { });
  }

  ngOnInit(){

  } //End
}