import { NgModule }      from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import {BlogComponent} from './blog.component';

@NgModule({
    imports: [FormsModule, BrowserModule],
    declarations: [BlogComponent],
    exports: [BlogComponent],
    providers: [],
})

export class BlogModule { }