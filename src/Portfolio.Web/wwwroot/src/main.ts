
import {createPlatformFactory,CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';

import {AppComponent} from './app/app.component';
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {LayoutComponent} from './app/layout/layout.component';
import {IsometricGrid} from './app/my-work/my-work.directive';
import {HeaderComponent} from './app/header/header.component';
import {HomeComponent } from './app/home/home.component';
import { ProfileComponent} from './app/profile/profile.component';
import {ProfileWidgetComponent} from './app/profile-widget/profileWidget.component';
import {ProfileAboutWidgetComponent} from './app/profile-about-widget/profileAboutWidget.component';
import { FeedComponent} from './app/feed/feed.component';
import {BlogComponent } from './app/blog/blog.component';
import { MyWorkComponent} from './app/my-work/my-work.component';
import {MyWorkDetailComponent} from './app/my-work-detail/my-work-detail.component';
import { routing,
         appRoutingProviders }  from './app/app.routes';

@NgModule({
  imports:      [ BrowserModule,  routing ],
  declarations: [ AppComponent , LayoutComponent, IsometricGrid,HeaderComponent, MyWorkDetailComponent,
                  HomeComponent,  ProfileComponent, FeedComponent,BlogComponent , MyWorkComponent,
                  ProfileWidgetComponent,ProfileAboutWidgetComponent],
  bootstrap:    [ AppComponent ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [
    appRoutingProviders
  ],
})

export class AppModule { }


var myPlatformFactory = createPlatformFactory(platformBrowserDynamic, 'myPlatform');
myPlatformFactory().bootstrapModule(AppModule);