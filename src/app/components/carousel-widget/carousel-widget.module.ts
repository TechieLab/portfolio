import { NgModule, CUSTOM_ELEMENTS_SCHEMA }      from '@angular/core';
import {CarouselWidgetComponent} from './carousel-widget.component';

@NgModule({
    imports: [  ],
    declarations: [ CarouselWidgetComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    exports: [CarouselWidgetComponent],    
    providers: [],
})

export class CarouselWidgetModule { }