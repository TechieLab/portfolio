import {Component} from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { IsometricGrid } from './my-work.directive';
import {MyWorkService} from './my-work.service';

@Component({
 template:require('./my-work.html'),
 directives:[IsometricGrid, ROUTER_DIRECTIVES],
 providers:[MyWorkService]
})

export class MyWorkComponent{
     items: Array<any>;
     Item:Array<Object>;
     errorMessage: boolean = false;

    constructor(private workService:MyWorkService){
       this.getProjectList();
    }

    getProjectList(){
        let self = this;
        this.workService.getProjectList().subscribe(function(response:any){
            
               self.Item = JSON.parse(response._body);
              if(!self.Item.length){
                  self.errorMessage = true;
               }
          });
    }
}