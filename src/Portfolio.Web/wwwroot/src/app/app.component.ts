import {Component, OnInit, OnDestroy} from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import 'rxjs/add/operator/map';

import {LayoutComponent} from './layout/layout.component';
import { IsometricGrid } from './my-work/my-work.directive';

@Component({
  selector:'my-app',
  template: '<layout></layout>',
   directives: [LayoutComponent,IsometricGrid]
      
})

export class AppComponent implements  OnInit, OnDestroy{
     code:Subscription;

     constructor(private activatedRoute: ActivatedRoute){}

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