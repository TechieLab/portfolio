import {Component} from '@angular/core';
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {LoginComponent} from './components/account/login.component';
import {HomeComponent} from './components/home/home.component';
import {DashboardComponent} from './components/dashboard/dashboard.component';
import {ProfileComponent} from './components/profile/profile.component';
import {ProfileManageComponent} from './components/profile-manage/profile-manage.component';
import {BlogComponent} from './components/blog/blog.component';
import {MyWorkComponent} from './components/my-work/my-work.component.ts';
import {MyWorkDetailComponent} from './components/my-work-detail/my-work-detail.component';


const appRoutes: Routes = [
    { path: '', component: DashboardComponent },
    { path: 'home', component: DashboardComponent },
    { path: 'login', component: LoginComponent },
    { path: 'profile', component: ProfileComponent },
    { path: 'profile/manage', component: ProfileManageComponent },
    { path: 'profile/:username', component: ProfileComponent },
    { path: 'blog', component: BlogComponent },
    { path: 'work', component: MyWorkComponent },
    { path: 'work/:id', component: MyWorkDetailComponent }
];

export const appRoutingProviders: any[] = [

];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);