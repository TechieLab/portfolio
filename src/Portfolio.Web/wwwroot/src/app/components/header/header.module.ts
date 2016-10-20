import { NgModule, CUSTOM_ELEMENTS_SCHEMA}      from '@angular/core';
import { FormsModule }   from '@angular/forms';
import {HeaderComponent} from './header.component';

@NgModule({
    imports: [ FormsModule ],
    declarations: [ HeaderComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
     exports: [HeaderComponent],
    providers: [],
})

export class HeaderModule { }