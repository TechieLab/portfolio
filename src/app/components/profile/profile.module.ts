import { NgModule, CUSTOM_ELEMENTS_SCHEMA}      from '@angular/core';
import {ProfileComponent} from './profile.component';
import { FormsModule }   from '@angular/forms';
import {BrowserModule } from '@angular/platform-browser';

@NgModule({
  imports: [FormsModule, BrowserModule],
  declarations: [ProfileComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [ProfileComponent],
  providers: [],
})

export class ProfileModule { }