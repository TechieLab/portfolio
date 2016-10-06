
import {createPlatformFactory, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';

import {AppComponent} from './app/app.component';
import { NgModule }      from '@angular/core';
import {HttpModule} from '@angular/http';
import { FormsModule }   from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import {LayoutComponent} from './app/components/layout/layout.component';
import {IsometricGrid} from './app/components/my-work/my-work.directive';
import {HeaderComponent} from './app/components/header/header.component';
import {HomeComponent } from './app/components/home/home.component';
import { ProfileComponent} from './app/components/profile/profile.component';
import {ProfileWidgetComponent} from './app/components/profile-widget/profileWidget.component';
import {ProfileAboutWidgetComponent} from './app/components/profile-about-widget/profileAboutWidget.component';
import { FeedComponent} from './app/components/feed/feed.component';
import {BlogComponent } from './app/components/blog/blog.component';
import { MyWorkComponent} from './app/components/my-work/my-work.component';
import {MyWorkDetailComponent} from './app/components/my-work-detail/my-work-detail.component';

import { routing,
  appRoutingProviders }  from './app/app.routes';

@NgModule({
  imports: [BrowserModule, BrowserModule,
    FormsModule,
    HttpModule, 
    routing
    ],
  declarations: [
    AppComponent, LayoutComponent, HeaderComponent, MyWorkDetailComponent,
    HomeComponent, ProfileComponent, FeedComponent, BlogComponent, MyWorkComponent,
    ProfileWidgetComponent, ProfileAboutWidgetComponent, IsometricGrid],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [
    appRoutingProviders
  ],
})

export class AppModule { }

platformBrowserDynamic().bootstrapModule(AppModule);