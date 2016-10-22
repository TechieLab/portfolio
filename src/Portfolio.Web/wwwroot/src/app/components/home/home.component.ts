import {Component,OnInit, ElementRef} from '@angular/core';
import {window} from '@angular/platform-browser/src/facade/browser';
import {ProfileComponent} from '../profile/profile.component';
import {ProfileWidgetComponent} from '../profile-widget/profile-widget.component';
import {ProfileAboutWidgetComponent} from '../profile-about-widget/profile-about-widget.component';
import {FeedComponent} from '../feed/feed.component';

@Component({
  selector:'home',
  template: require('./home.html'),
  entryComponents: [ProfileComponent, ProfileWidgetComponent, ProfileAboutWidgetComponent, FeedComponent]    
})

export class HomeComponent implements OnInit{
     
      constructor(){
       
      }

      ngOnInit(){
          // temporary code for removing loader
          
      }
}