import { Directive, ElementRef, HostListener, Input, Renderer,OnInit } from '@angular/core';

import {window} from '@angular/platform-browser/src/facade/browser';

@Directive({
  selector: '[isometric-grid]'
})

export class IsometricGrid implements OnInit  {
  max:number = 0;
  min:number = 0;
  static msg:string = ""; 
 

  constructor(private el: ElementRef, private renderer: Renderer) {
   }
  

  getRandomInt(min,max){
       return Math.floor(Math.random() * (this.max - this.min + 1)) + this.min;
  }

  ngOnInit() {
      
        let self = this; 
         [].slice.call(document.querySelectorAll('.isolayer')).forEach(function(el) {
                    debugger;
                    console.log('values',el);
                    console.log(this);
                    new window.IsoGrid(el, {
                        type : 'scrollable',
                        transform : 'translateX(-15vw) translateY(275px) rotateX(45deg) rotateZ(45deg)',
                        stackItemsAnimation : {
                            properties : function(pos) {
                                return {
                                    translateZ: (pos+1) * 50,
                                    rotateZ: self.getRandomInt(-3,3)
                                };
                            },
                            options : function(pos, itemstotal) {
                                return {
                                    type: window.dynamics.bezier,
                                    duration: 500,
                                    points: [{"x":0,"y":0,"cp":[{"x":0.2,"y":1}]},{"x":1,"y":1,"cp":[{"x":0.3,"y":1}]}],
                                    //delay: (itemstotal-pos-1)*40
                                };
                            }
                        },
                        onGridLoaded : function() {
                            window.classie.add(document.body, 'grid-loaded');
                        }
                    });
                }); 

             console.log('isogrid need to call');
            
  }
}
