import {Component, OnInit, OnDestroy} from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import 'rxjs/add/operator/map';



@Component({
  selector:'my-app',
  template: '<layout></layout>'      
})

export class AppComponent implements  OnInit, OnDestroy{
     code:Subscription;

     constructor(private activatedRoute: ActivatedRoute){}

      ngOnInit() {
    
      }

     ngOnDestroy() {
       this.code.unsubscribe();
    }
}