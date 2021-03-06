import { NgModule, CUSTOM_ELEMENTS_SCHEMA}      from '@angular/core';
import {ProfileManageComponent} from './profile-manage.component';
import { FormsModule }   from '@angular/forms';
import {BrowserModule } from '@angular/platform-browser';

@NgModule({
  imports: [FormsModule, BrowserModule],
  declarations: [ProfileManageComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [ProfileManageComponent],
  providers: [],
})

export class ProfileManageModule { }