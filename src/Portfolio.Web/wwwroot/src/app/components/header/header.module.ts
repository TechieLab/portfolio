import { NgModule, CUSTOM_ELEMENTS_SCHEMA, TemplateRef}      from '@angular/core';
import { FormsModule }   from '@angular/forms';
import {BrowserModule } from '@angular/platform-browser';
import {HeaderComponent} from './header.component';
import { RouterModule } from '@angular/router';
import {AuthService} from '../../services/auth.service';

@NgModule({
    imports: [FormsModule, BrowserModule, RouterModule],
    declarations: [ HeaderComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    exports: [HeaderComponent],
    providers: [AuthService]
})

export class HeaderModule { }