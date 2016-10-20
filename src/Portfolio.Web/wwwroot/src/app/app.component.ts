import '../rxjs-operators';

import {Component, OnInit, ViewChild, OnDestroy, ViewContainerRef} from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';

import {LayoutComponent} from './components/layout/layout.component';

import {UserService} from './services/userService';
import {IUser} from './models/user';

@Component({
    selector: 'my-app',
    template: require('./app.html'),
    entryComponents: [LayoutComponent],   
    providers: [UserService]
})

export class AppComponent implements OnInit, OnDestroy {
    code: Subscription;
    userResult: IUser;
    errorMessage: any;

    constructor(private activatedRoute: ActivatedRoute, private userService: UserService) {
        this.code = new Subscription();
    }

    ngOnInit() {

        this.code = this.activatedRoute.params.subscribe(params => {
            let username = params['username'];

            if (username) {
                this.userService.getUserByName(username).subscribe(res => this.userResult = res, error => this.errorMessage = <any>error);
            }     
        });
    }

    ngOnDestroy() {
        this.code.unsubscribe();
    }
}
