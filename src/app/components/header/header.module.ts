import { NgModule, CUSTOM_ELEMENTS_SCHEMA, TemplateRef}      from '@angular/core';
import { FormsModule }   from '@angular/forms';
import {CommonModule} from '@angular/common';
import {HeaderComponent} from './header.component';
import { RouterModule } from '@angular/router';
import {AuthService} from '../../services/auth.service';

@NgModule({
    imports: [FormsModule, RouterModule, CommonModule],
    declarations: [ HeaderComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    exports: [HeaderComponent],
    providers: [AuthService]
})

export class HeaderModule { }