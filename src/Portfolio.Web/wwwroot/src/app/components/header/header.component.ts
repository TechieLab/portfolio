import {Component, TemplateRef} from '@angular/core';
import {Router} from '@angular/router';

@Component({
    selector: 'app-header',
    template: require('./header.html')
})

export class HeaderComponent {
    public isUserAuthenticated: boolean;

    constructor(private router: Router) {
        this.isUserAuthenticated = this.isLoggedin();
    }

    isLoggedin = function () {
        return !!localStorage.getItem('auth_token');
    }

    logout() {
        localStorage.removeItem('auth_token');
        this.router.navigate(['login']);
    }
}