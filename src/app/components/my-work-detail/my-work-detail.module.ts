import { NgModule, CUSTOM_ELEMENTS_SCHEMA}      from '@angular/core';
import {MyWorkDetailComponent} from './my-work-detail.component';
import {FeedComponent} from '../feed/feed.component';

@NgModule({
    imports: [],
    declarations: [MyWorkDetailComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    exports: [MyWorkDetailComponent],
    providers: [],
})

export class MyWorkDetailModule { }