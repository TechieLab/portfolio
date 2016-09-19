import {Component} from '@angular/core';
import { IsometricGrid } from './my-work.directive';
import {MyWorkService} from './my-work.service';

@Component({
    template: require('./my-work.html'),
    entryComponents: [IsometricGrid],
    providers: [MyWorkService]
})

export class MyWorkComponent {
    items: Array<any>;
    Item: Array<Object>;
    errorMessage: boolean = false;

    constructor(private workService: MyWorkService) {
        this.getProjectList();
    }

    getProjectList() {
        let self = this;
        this.workService.getProjectList().subscribe(function (response: any) {

            self.Item = JSON.parse(response._body);
            if (!self.Item.length) {
                self.errorMessage = true;
            }
        });
    }
}