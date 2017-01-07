import { NgModule }      from '@angular/core';
import { FormsModule }   from '@angular/forms';
import {CommonModule} from '@angular/common';
import {BlogComponent} from './blog.component';

@NgModule({
    imports: [FormsModule, CommonModule],
    declarations: [BlogComponent],
    exports: [BlogComponent],
    providers: [],
})

export class BlogModule { }