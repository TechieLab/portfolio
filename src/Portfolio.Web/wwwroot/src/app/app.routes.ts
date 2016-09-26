import {Component} from '@angular/core';


import {HomeComponent} from './home/home.component';
import {ProfileComponent} from './profile/profile.component';
import {BlogComponent} from './blog/blog.component';
import {MyWorkComponent} from './my-work/my-work.component.ts';
import {MyWorkDetailComponent} from './my-work-detail/my-work-detail.component';
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

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