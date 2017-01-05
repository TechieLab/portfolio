import {Component} from '@angular/core';

import { ROUTER_DIRECTIVES } from '@angular/router';

import {HomeComponent} from '../home/home.component';
import {HeaderComponent} from '../header/header.component';
import {ProfileComponent} from '../profile/profile.component';

@Component({
   selector:'layout',
   template: require('./layout.html'),
   directives: [ROUTER_DIRECTIVES,HeaderComponent] 
})



export class LayoutComponent{}