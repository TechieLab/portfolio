import {Component, OnInit, ViewChild, OnDestroy, ViewContainerRef} from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import 'rxjs/add/operator/map';

import {LayoutComponent} from './layout/layout.component';
import {HeaderComponent} from './header/header.component';

@Component({
  selector: 'my-app',
  template: require('./app.html'),
  entryComponents: [LayoutComponent, HeaderComponent]
})

export class AppComponent implements OnInit, OnDestroy {
  code: Subscription;

  constructor(private activatedRoute: ActivatedRoute) {
    this.code = new Subscription();
  }

  ngOnInit() {

    this.code = this.activatedRoute.params.subscribe(params => {
      let code_id = params['code'];
      alert(code_id);
      console.log(code_id);

    });
  }

  ngOnDestroy() {
    this.code.unsubscribe();
  }
}
