import { NgModule, CUSTOM_ELEMENTS_SCHEMA}      from '@angular/core';
import {ProfileComponent} from './profile.component';

@NgModule({
  imports: [],
  declarations: [ProfileComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [ProfileComponent],
  providers: [],
})

export class ProfileModule { }