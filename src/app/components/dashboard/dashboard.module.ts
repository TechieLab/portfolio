import { NgModule, CUSTOM_ELEMENTS_SCHEMA }      from '@angular/core';
import {DashboardComponent} from './dashboard.component';
import {CommonModule} from '@angular/common';

import { ProfileModule} from '../profile/profile.module';
import {ProfileWidgetModule} from '../profile-widget/profile-widget.module';
import {ProfileAboutWidgetModule} from '../profile-about-widget/profile-about-widget.module';
import {FeedModule} from '../feed/feed.module';
import {BlogModule } from '../blog/blog.module';
import {MyWorkModule} from '../my-work/my-work.module';
import {MyWorkDetailModule} from '../my-work-detail/my-work-detail.module';
import {NewLinePipe} from '../../pipes/newLine.pipe';

@NgModule({
    imports: [MyWorkDetailModule, CommonModule,
        ProfileModule, FeedModule, BlogModule, MyWorkModule,
        ProfileWidgetModule, ProfileAboutWidgetModule],
    declarations: [DashboardComponent, NewLinePipe],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    exports: [DashboardComponent],
    providers: [],
})

export class DashboardModule { }