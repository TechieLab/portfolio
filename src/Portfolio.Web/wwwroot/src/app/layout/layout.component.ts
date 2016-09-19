import {Component} from '@angular/core';
import {HomeComponent} from '../home/home.component';
import {HeaderComponent} from '../header/header.component';
import {ProfileComponent} from '../profile/profile.component';

@Component({
   selector:'custom-layout',
   template: require('./layout.html'),
   entryComponents: [HeaderComponent] 
})



export class LayoutComponent{}