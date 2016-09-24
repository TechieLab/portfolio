import {Component} from '@angular/core';
import {HomeComponent} from '../home/home.component';
import {HeaderComponent} from '../header/header.component';
import {ProfileComponent} from '../profile/profile.component';
import {RouterOutlet} from '@angular/router';

@Component({
   selector:'custom-layout',
   template: require('./layout.html'),   
   providers: [RouterOutlet,HeaderComponent]    
})



export class LayoutComponent{}