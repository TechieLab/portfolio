

import { NgModule }      from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import {LoginComponent} from './login.component';
import {AuthService} from '../../services/auth.service';

@NgModule({
    imports: [FormsModule, BrowserModule],
    declarations: [LoginComponent],
    exports: [LoginComponent],
    providers: [AuthService],
})

export class AccountModule { }