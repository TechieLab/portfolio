import {Component} from '@angular/core';
import {MyWorkService} from './my-work.service';
declare var $ : any;
declare var Highcharts : any;
@Component({
 template:require('./my-work.html'),
 providers:[MyWorkService]
})

export class MyWorkComponent{
     items: Array<any>;
     Item:Array<Object>;
     errorMessage: boolean = false;

    constructor(private workService:MyWorkService){
       $('body').removeClass('grid-loaded');
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