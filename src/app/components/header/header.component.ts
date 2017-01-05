import {Component, TemplateRef} from '@angular/core';
import {Router} from '@angular/router';

import {AuthService} from '../../services/auth.service';

@Component({
    selector: 'app-header',
    template: require('./header.html')
})

export class HeaderComponent {
    public isUserAuthenticated: boolean;
    subscription: any;
    constructor(private router: Router, private authservice: AuthService) {
        this.isUserAuthenticated = this.isLoggedin();

        this.subscription = this.authservice.getAuthChangeEmitter()
            .subscribe(item => this.isLoggedin());
    }

    isLoggedin = function () {
        return !!localStorage.getItem('auth_token');
    }

    logout() {
        localStorage.removeItem('auth_token');
        this.isLoggedin();
        this.router.navigate(['login']);
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
}