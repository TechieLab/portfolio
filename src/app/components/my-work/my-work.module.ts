import { NgModule , CUSTOM_ELEMENTS_SCHEMA}      from '@angular/core';
import {MyWorkComponent} from './my-work.component';
import {IsometricGrid} from './my-work.directive';

@NgModule({
    imports: [  ],
    declarations: [ MyWorkComponent, IsometricGrid],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    exports: [MyWorkComponent],
    providers: [],
})

export class MyWorkModule { }