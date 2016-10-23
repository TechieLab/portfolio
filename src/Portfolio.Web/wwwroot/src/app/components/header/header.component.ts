import {Component, TemplateRef} from '@angular/core';

@Component({
    selector:'app-header',
    template: require('./header.html')
})

export class HeaderComponent{
    public isUserAuthenticated : boolean;

    constructor(){
        this.isUserAuthenticated = false;
    }

    checkAuthenticatedUser(){

    }
}