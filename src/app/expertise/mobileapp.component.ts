import {Component} from '@angular/core';
import {MyAppRoutes} from '../../app/app.routes';
import { ROUTER_DIRECTIVES } from '@angular/router';


@Component({
    template:require('./mobile-app.html'),
    directives:[ROUTER_DIRECTIVES]
})

export class MobileAppComponent{

}