import {Component,OnInit, ElementRef} from '@angular/core';
import {window} from '@angular/platform-browser/src/facade/browser';
import { ROUTER_DIRECTIVES } from '@angular/router';

import {ProfileComponent} from '../profile/profile.component';
import {ProfileWidgetComponent} from '../profile-widget/profileWidget.component';
import {ProfileAboutWidgetComponent} from '../profile-about-widget/profileAboutWidget.component';
import {FeedComponent} from '../feed/feed.component';
import {CarouselWidgetComponent} from '../carousel-widget/carousel-widget.component';
import {HomeService} from './home.service';

import {MobileWidgetComponent} from '../svg/mobile';
import {UIUXWidgetComponent} from '../svg/UI-UX';
import {ProductWidgetComponent} from '../svg/productdesign';
import {WebDesignWidgetComponent} from '../svg/webDesign';
import {WebDevelopmentWidgetComponent} from '../svg/WebDevelopment';


@Component({
  selector:'home',
  template: require('./home.html'),
  providers:[HomeService],
  directives: [ ROUTER_DIRECTIVES,ProfileComponent,ProfileWidgetComponent,ProfileAboutWidgetComponent,FeedComponent,CarouselWidgetComponent,
                MobileWidgetComponent, UIUXWidgetComponent, ProductWidgetComponent,WebDesignWidgetComponent ,WebDevelopmentWidgetComponent  
              ]    
})

export class HomeComponent implements OnInit{
  listItem:Array<Object>;
  errorMessage: boolean = false;
  
  constructor(private homeService:HomeService){
    this.loadLikedInProfile();
  }

  loadLikedInProfile() {
        let self = this;
        this.homeService.loadLinkedin().subscribe(function(response:any){});
  }

  ngOnInit(){
            // temporary code for removing loader
            window.$('body').addClass('grid-loaded');

            //Canvas header Code
                var width, height, largeHeader, canvas, ctx, triangles, target, animateHeader = true;
                var colors = ['220,220,220', '229,229,229', '153,153,153', '228,220,245', '153,158,150'];

                // Main
                initHeader();
                addListeners();
                initAnimation();

            function initHeader() {
                width = window.$('.header-wrapper').width();
                height = window.$('.header-wrapper').height() + 70;
                target = {x: 0, y: height};

                largeHeader = document.getElementById('large-header');
                largeHeader.style.height = height +'px';

                canvas = document.getElementById('demo-canvas');
                canvas.width = width;
                canvas.height = height;
                ctx = canvas.getContext('2d');

                // create particles
                triangles = [];
                for(var x = 0; x < 480; x++) {
                    addTriangle(x*10);
                }
            }

            function addTriangle(delay) {
                setTimeout(function() {
                    var t = new Triangle();
                    triangles.push(t);
                    tweenTriangle(t);
                }, delay);
            }

            function initAnimation() {
                animate();
            }

            function tweenTriangle(tri) {
                var t = Math.random()*(2*Math.PI);
                var x = (500+Math.random()*100)*Math.cos(t) + width*0.5;
                var y = (500+Math.random()*100)*Math.sin(t) + height*0.5-20;
                var time = 4+3*Math.random();

                window.TweenLite.to(tri.pos, time, {x: x,
                    y: y, ease:window.Circ.easeOut,
                    onComplete: function() {
                        tri.init();
                        tweenTriangle(tri);
                }});
            }

            // Event handling
            function addListeners() {
                window.addEventListener('scroll', scrollCheck);
                window.addEventListener('resize', resize);
            }

            function scrollCheck() {
                if(document.body.scrollTop > height) animateHeader = false;
                else animateHeader = true;
            }

            function resize() {
                width = window.$('.header-wrapper').width();
                height = window.$('.header-wrapper').height() + 70;;
                largeHeader.style.height = height+'px';
                canvas.width = width;
                canvas.height = height;
            }

            function animate() {
                if(animateHeader) {
                    ctx.clearRect(0,0,width,height);
                    for(var i in triangles) {
                        triangles[i].draw();
                    }
                }
                requestAnimationFrame(animate);
            }

            // Canvas manipulation
            function Triangle() {
                var _this = this;

                // constructor
                (function() {
                    _this.coords = [{},{},{}];
                    _this.pos = {};
                    init();
                })();

                function init() {
                    _this.pos.x = width*0.5;
                    _this.pos.y = height*0.5-20;
                    _this.coords[0].x = -10+Math.random()*40;
                    _this.coords[0].y = -10+Math.random()*40;
                    _this.coords[1].x = -10+Math.random()*40;
                    _this.coords[1].y = -10+Math.random()*40;
                    _this.coords[2].x = -10+Math.random()*40;
                    _this.coords[2].y = -10+Math.random()*40;
                    _this.scale = 0.1+Math.random()*0.3;
                    _this.color = colors[Math.floor(Math.random()*colors.length)];
                    setTimeout(function() { _this.alpha = 0.8; }, 10);
                }

                this.draw = function() {
                    if(_this.alpha >= 0.005) _this.alpha -= 0.005;
                    else _this.alpha = 0;

                    
                    
                    ctx.beginPath();
                    ctx.moveTo(_this.coords[0].x+_this.pos.x, _this.coords[0].y+_this.pos.y);
                    ctx.lineTo(_this.coords[1].x+_this.pos.x, _this.coords[1].y+_this.pos.y);
                    ctx.lineTo(_this.coords[2].x+_this.pos.x, _this.coords[2].y+_this.pos.y);
                    
                    ctx.closePath();
                    ctx.fillStyle = 'rgba('+_this.color+','+ _this.alpha+')';
                
                    ctx.fill();

                    

                };

                this.init = init;
            }
    
      	
         
        window.$(".UI").ElasticProgress({
				buttonSize: 60,
				fontFamily: "Montserrat",
				colorBg: "#dcdcdc",
				colorFg: "#4ebcc4",
                labelHeight: 30,
                textFail: "Download Failed",
				textComplete: Math.floor(Math.random() * 21) + 80 + '%',
			
				onOpen: function(event) {
						console.log("onOpen");
						fakeLoading(window.$(this),2,2);
				},
				onComplete: function(event) {
						console.log("onComplete");
				},
				onClose: function(event) {
						console.log("onClose");
				},
				onFail: function(event) {
						console.log("onFail");
						window.$(this).ElasticProgress("open");
				},
				onCancel: function(event) {
						console.log("onCancel");
						window.$(this).ElasticProgress("open");
				}
		});
         window.$(".njs").ElasticProgress({
				buttonSize: 60,
				fontFamily: "Montserrat",
				colorBg: "#dcdcdc",
				colorFg: "#4ebcc4",
                labelHeight: 30,
                textFail: "Download Failed",
				textComplete: Math.floor(Math.random() * 21) + 80 + '%',
			
				onOpen: function(event) {
						console.log("onOpen");
						fakeLoading(window.$(this),2,2);
				},
				onComplete: function(event) {
						console.log("onComplete");
				},
				onClose: function(event) {
						console.log("onClose");
				},
				onFail: function(event) {
						console.log("onFail");
						window.$(this).ElasticProgress("open");
				},
				onCancel: function(event) {
						console.log("onCancel");
						window.$(this).ElasticProgress("open");
				}
		});
         window.$(".angjs").ElasticProgress({
				buttonSize: 60,
				fontFamily: "Montserrat",
				colorBg: "#dcdcdc",
				colorFg: "#4ebcc4",
                labelHeight: 30,
                textFail: "Download Failed",
				textComplete: Math.floor(Math.random() * 21) + 80 + '%',
			
				onOpen: function(event) {
						console.log("onOpen");
						fakeLoading(window.$(this),2,2);
				},
				onComplete: function(event) {
						console.log("onComplete");
				},
				onClose: function(event) {
						console.log("onClose");
				},
				onFail: function(event) {
						console.log("onFail");
						window.$(this).ElasticProgress("open");
				},
				onCancel: function(event) {
						console.log("onCancel");
						window.$(this).ElasticProgress("open");
				}
		});
        
         window.$(".wbt").ElasticProgress({
				buttonSize: 60,
				fontFamily: "Montserrat",
				colorBg: "#dcdcdc",
				colorFg: "#4ebcc4",
                labelHeight: 30,
                textFail: "Download Failed",
				textComplete: Math.floor(Math.random() * 21) + 80 + '%',
			
				onOpen: function(event) {
						console.log("onOpen");
						fakeLoading(window.$(this),2,2);
				},
				onComplete: function(event) {
						console.log("onComplete");
				},
				onClose: function(event) {
						console.log("onClose");
				},
				onFail: function(event) {
						console.log("onFail");
						window.$(this).ElasticProgress("open");
				},
				onCancel: function(event) {
						console.log("onCancel");
						window.$(this).ElasticProgress("open");
				}
		});
        
         window.$(".nodejs").ElasticProgress({
				buttonSize: 60,
				fontFamily: "Montserrat",
				colorBg: "#dcdcdc",
				colorFg: "#4ebcc4",
                labelHeight: 30,
                textFail: "Download Failed",
				textComplete: Math.floor(Math.random() * 21) + 80 + '%',
			
				onOpen: function(event) {
						console.log("onOpen");
						fakeLoading(window.$(this),2,2);
				},
				onComplete: function(event) {
						console.log("onComplete");
				},
				onClose: function(event) {
						console.log("onClose");
				},
				onFail: function(event) {
						console.log("onFail");
						window.$(this).ElasticProgress("open");
				},
				onCancel: function(event) {
						console.log("onCancel");
						window.$(this).ElasticProgress("open");
				}
		});
        
         window.$(".java").ElasticProgress({
				buttonSize: 60,
				fontFamily: "Montserrat",
				colorBg: "#dcdcdc",
				colorFg: "#4ebcc4",
                textFail: "Download Failed",
                labelHeight: 30,
				textComplete: Math.floor(Math.random() * 41) + 60 + '%',
			
				onOpen: function(event) {
						console.log("onOpen");
						fakeLoading(window.$(this),2,2);
				},
				onComplete: function(event) {
						console.log("onComplete");
				},
				onClose: function(event) {
						console.log("onClose");
				},
				onFail: function(event) {
						console.log("onFail");
						window.$(this).ElasticProgress("open");
				},
				onCancel: function(event) {
						console.log("onCancel");
						window.$(this).ElasticProgress("open");
				}
		});
        
        
        window.$(".UI,.wbt,.angjs,.njs,.java,.nodejs").ElasticProgress("open");
	
		function fakeLoading($obj, speed, failAt) {
				if (typeof speed == "undefined") speed = 2;
				if (typeof failAt == "undefined") failAt = -1;
				var v = 0;
				var l = function() {
						if (failAt > -1) {
								if (v >= failAt) {
										if (typeof $obj.jquery != "undefined") {
												$obj.ElasticProgress("fail");
										} else {
												$obj.fail();
										}
										return;
								}
						}
						v += Math.pow(Math.random(), 2) * 0.1 * speed;

						if (typeof $obj.jquery != "undefined") {
								$obj.ElasticProgress("setValue", v);
						} else {
								$obj.setValue(v);
						}
						if (v < 1) {
								window.TweenMax.delayedCall(0.05 + (Math.random() * 0.14), l)
						}
				};
				l();
		}

 






      //End
  }
}