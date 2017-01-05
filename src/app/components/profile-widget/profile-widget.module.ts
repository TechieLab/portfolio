import { NgModule ,CUSTOM_ELEMENTS_SCHEMA }      from '@angular/core';
import {ProfileWidgetComponent} from './profile-widget.component';

@NgModule({
    imports: [  ],
    declarations: [ ProfileWidgetComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    exports: [ProfileWidgetComponent],
    providers: [],
})

export class ProfileWidgetModule { }
