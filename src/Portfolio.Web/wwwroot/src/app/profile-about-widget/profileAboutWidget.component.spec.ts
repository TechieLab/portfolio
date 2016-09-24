﻿import {  
  TestBed,
  ComponentFixture 
} from '@angular/core/testing';

import {BrowserDynamicTestingModule, platformBrowserDynamicTesting} from '@angular/platform-browser-dynamic/testing'; 

import {ProfileAboutWidgetComponent} from  './profileAboutWidget.component';

describe('Profile About Widget Component:', () => {
    let component: ProfileAboutWidgetComponent;
    let fixture: ComponentFixture<ProfileAboutWidgetComponent>;           

    beforeEach(() => {
        // refine the test module by declaring the test component
        TestBed.configureTestingModule({
            declarations: [ ProfileAboutWidgetComponent ],
        });

        TestBed.compileComponents();

            // create component and test fixture
        fixture = TestBed.createComponent(ProfileAboutWidgetComponent);

        // get test component from the fixture
        component = fixture.componentInstance;


    });
    
    it("should initialize proxyService correctly", () =>
    {
       
    });    
});