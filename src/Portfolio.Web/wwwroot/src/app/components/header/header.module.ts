import { NgModule, CUSTOM_ELEMENTS_SCHEMA, TemplateRef}      from '@angular/core';
import { FormsModule }   from '@angular/forms';
import {BrowserModule } from '@angular/platform-browser';
import {HeaderComponent} from './header.component';
import { RouterModule } from '@angular/router';

@NgModule({
    imports: [FormsModule, BrowserModule, RouterModule],
    declarations: [ HeaderComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    exports: [HeaderComponent],
    providers: []
})

export class HeaderModule { }