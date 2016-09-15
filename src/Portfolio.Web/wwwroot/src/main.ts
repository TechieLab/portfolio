import 'core-js';
import 'reflect-metadata';
import 'zone.js/dist/zone';


import {bootstrap} from '@angular/platform-browser-dynamic';
import {HTTP_PROVIDERS} from '@angular/http';
import {AppComponent} from './app/app.component';

import { provideRouter } from '@angular/router'; 
import {MyAppRoutes} from './app/app.routes';



bootstrap(AppComponent,[provideRouter(MyAppRoutes),HTTP_PROVIDERS]);