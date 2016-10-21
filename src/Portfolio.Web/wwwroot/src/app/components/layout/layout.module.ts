import { NgModule, CUSTOM_ELEMENTS_SCHEMA }      from '@angular/core';
import {RouterModule} from '@angular/router';

import {LayoutComponent} from  './layout.component';
import {HeaderModule} from '../header/header.module';
import {HomeModule } from '../home/home.module';
import {DashboardModule } from '../dashboard/dashboard.module';

@NgModule({
    imports: [RouterModule,  HeaderModule, DashboardModule, HomeModule],
    declarations: [ LayoutComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    exports: [LayoutComponent],
    providers: [],
})

export class LayoutModule { }