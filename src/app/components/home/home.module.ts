import { NgModule , CUSTOM_ELEMENTS_SCHEMA}      from '@angular/core';
import {HomeComponent} from './home.component';
import { FormsModule }   from '@angular/forms';

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

@NgModule({
    imports: [ FormsModule ],
    declarations: [HomeComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    exports: [HomeComponent],
    providers: [],
})

export class HomeModule { }