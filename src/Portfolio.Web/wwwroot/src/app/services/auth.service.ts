import {Injectable} from '@angular/core';
import {tokenNotExpired} from 'angular2-jwt';
import { authConfig } from '../config/auth.config';

//Avoid name not found warnings
declare var Auth0Lock: any;

@Injectable()
export class Auth {
    //configure Auth0
    lock = new Auth0Lock(authConfig.clientID, authConfig.domain, { auth: { redirectUrl: "http://localhost:5000/home" } });

    constructor() {
        // Add callback for lock `authenticated` event
        this.lock.on("authenticated", (authResult) => {
            console.log('authResult...'+ authResult);
            localStorage.setItem('id_token', authResult.idToken);
        });
    }

    public login() {
        // Call the show method to display the widget.
        this.lock.show();
    };

    public authenticated() {
        // Check if there's an unexpired JWT
        // This searches for an item in localStorage with key == 'id_token'
        return tokenNotExpired();
    };

    public logout() {
        // Remove token from localStorage
        localStorage.removeItem('id_token');
    };
}