import { NgModule, CUSTOM_ELEMENTS_SCHEMA}      from '@angular/core';
import {ProfileComponent} from './profile.component';
import { FormsModule }   from '@angular/forms';
import {CommonModule} from '@angular/common';
import {DateFilterPipe} from '../../pipes/dateFilter.pipe';

@NgModule({
  imports: [FormsModule, CommonModule],
  declarations: [ProfileComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [ProfileComponent],
  providers: [],
})

export class ProfileModule { }