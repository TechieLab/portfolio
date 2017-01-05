import {NgModule, CUSTOM_ELEMENTS_SCHEMA}      from '@angular/core';
import {HttpModule} from '@angular/http';
import {FormsModule }   from '@angular/forms';
import {BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import {LayoutModule} from './components/layout/layout.module';
import {AccountModule} from './components/account/account.module';
import { AUTH_PROVIDERS }      from 'angular2-jwt';
import { ValueProvider } from '@angular/core';

import { routing,
    appRoutingProviders }  from './app.routes';

import {AppComponent} from './app.component';

const WINDOW_PROVIDER: ValueProvider = {
    provide: Window,
    useValue: window
};

@NgModule({
    imports: [BrowserModule,
        BrowserModule,
        FormsModule,
        HttpModule,
        RouterModule,
        routing,
        LayoutModule,
        AccountModule             
    ],
    declarations: [AppComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    bootstrap: [AppComponent],
    providers: [
        appRoutingProviders,
        AUTH_PROVIDERS,
        WINDOW_PROVIDER
    ]
})

export class AppModule { }
