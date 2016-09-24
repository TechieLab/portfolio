﻿import {  
  TestBed,
  ComponentFixture 
} from '@angular/core/testing';

import {BrowserDynamicTestingModule, platformBrowserDynamicTesting} from '@angular/platform-browser-dynamic/testing'; 

import {ProfileWidgetComponent} from './profileWidget.component';

describe('Profile Widget component:', () => {
    let component: ProfileWidgetComponent;
    let fixture: ComponentFixture<ProfileWidgetComponent>;           

    beforeEach(() => {
        // refine the test module by declaring the test component
        TestBed.configureTestingModule({
            declarations: [ ProfileWidgetComponent ],
        });

        TestBed.compileComponents();

            // create component and test fixture
        fixture = TestBed.createComponent(ProfileWidgetComponent);

        // get test component from the fixture
        component = fixture.componentInstance;
    });
    
    it("should initialize proxyService correctly", () =>
    {
        
    });    
});