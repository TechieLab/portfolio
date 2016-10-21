import {ViewChild, ViewChildren, Component, OnInit, OnDestroy, ViewContainerRef  } from '@angular/core';


import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import 'rxjs/add/operator/map';

<<<<<<< HEAD
import {HeaderComponent} from './components/header/header.component';
=======
>>>>>>> 7b742ba3bd8e8d5441bafe92bccdfba204a83c66
import {LayoutComponent} from './components/layout/layout.component';

import {UserService} from './services/userService';
import {IUser} from './models/user';

@Component({
    selector: 'my-app',
    template: require('./app.html'),
    entryComponents: [LayoutComponent],   
    providers: [UserService]

})

export class AppComponent implements OnInit, OnDestroy  {
    code: Subscription;
    isGridLoaded: boolean = false;
    

    constructor(private activatedRoute: ActivatedRoute) {
        this.code = new Subscription();
        
  }

  ngOnInit() {
      var self = this;
       this.code = this.activatedRoute.params.subscribe(params => {
        let code_id = params['code'];
        self.isGridLoaded = true;
        console.log(code_id);
       

    });
  }

  ngOnDestroy() {
    this.code.unsubscribe();
  }
}
