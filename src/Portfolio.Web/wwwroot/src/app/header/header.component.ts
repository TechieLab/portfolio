import {Component} from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

@Component({
    selector:'app-header',
    template: require('./header.html'),
    directives: [ROUTER_DIRECTIVES] 
})

export class HeaderComponent{}