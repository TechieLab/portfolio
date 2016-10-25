﻿import {Component, ElementRef} from '@angular/core';
import {AccountService} from './accountService'
import {Router} from '@angular/router';

import {LoginModel} from './account.model';
import {IUser} from '../../models/user';

//Auth Service
import { Auth } from '../../services/auth.service';


@Component({
    selector: 'login-form',
    providers: [AccountService,Auth],
    template: require('./login.html')
})

export class LoginComponent {

    public loginModel: LoginModel;
    public currentUser: IUser;

    public errorMsg = '';

    constructor(private router: Router, private _service: AccountService,private auth: Auth) {
        this.loginModel = new LoginModel();
    }

    login() {
        this._service.authenticate(this.loginModel).subscribe((response) => {
            if (response.success) {
                this.currentUser = response.content;
                this.router.navigate(['home']);
            } else {
                this.errorMsg = response.message;
            }            
        });        
    }
}