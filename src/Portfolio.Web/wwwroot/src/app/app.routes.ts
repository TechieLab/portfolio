import {Component} from '@angular/core';
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {HomeComponent} from './components/home/home.component';
import {ProfileComponent} from './components/profile/profile.component';
import {BlogComponent} from './components/blog/blog.component';
import {MyWorkComponent} from './components/my-work/my-work.component.ts';
import {MyWorkDetailComponent} from './components/my-work-detail/my-work-detail.component';


const appRoutes: Routes = [  
   {path:'',component:HomeComponent},
   {path:'profile',component:ProfileComponent},
   {path:'blog',component:BlogComponent},
   {path:'work',component:MyWorkComponent},
   {path:'work/:id',component:MyWorkDetailComponent},
   {path:'profile/:code=',component:HomeComponent},
];

export const appRoutingProviders: any[] = [

];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);