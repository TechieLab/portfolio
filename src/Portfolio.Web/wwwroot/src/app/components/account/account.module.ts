

import { NgModule }      from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import {LoginComponent} from './login.component';

@NgModule({
    imports: [FormsModule, BrowserModule],
    declarations: [LoginComponent],
    exports: [LoginComponent],
    providers: [],
})

export class AccountModule { }