import { NgModule }      from '@angular/core';
import {FeedComponent} from './feed.component';
import {CommonModule} from '@angular/common';

@NgModule({
    imports: [ CommonModule ],
    declarations: [ FeedComponent],
    exports: [FeedComponent],
    providers: [],
})

export class FeedModule { }