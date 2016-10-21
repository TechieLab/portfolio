import { NgModule, CUSTOM_ELEMENTS_SCHEMA }      from '@angular/core';
import {ProfileAboutWidgetComponent} from './profile-about-widget.component';

@NgModule({
    imports: [],
    declarations: [ProfileAboutWidgetComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    exports: [ProfileAboutWidgetComponent],
    providers: [],
})

export class ProfileAboutWidgetModule { }