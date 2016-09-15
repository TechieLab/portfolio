import {Component,OnInit, ElementRef} from '@angular/core';
import {window} from '@angular/platform-browser/src/facade/browser';
import {ProfileComponent} from '../profile/profile.component';
import {ProfileWidgetComponent} from '../profile-widget/profileWidget.component';
import {ProfileAboutWidgetComponent} from '../profile-about-widget/profileAboutWidget.component';
import {FeedComponent} from '../feed/feed.component';

@Component({
  selector:'home',
  template: require('./home.html'),
  directives: [ProfileComponent,ProfileWidgetComponent,ProfileAboutWidgetComponent,FeedComponent]    
})

export class HomeComponent implements OnInit{
  constructor(private element:ElementRef){
       
  }

  ngOnInit(){
     // temporary code for removing loader
      window.$('body').addClass('grid-loaded');
  }
}