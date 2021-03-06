﻿import {  
  TestBed,
  ComponentFixture 
} from '@angular/core/testing';

import {BrowserDynamicTestingModule, platformBrowserDynamicTesting} from '@angular/platform-browser-dynamic/testing'; 
import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {HomeComponent} from  './home.component';
import {ProfileComponent} from '../profile/profile.component';
import {ProfileWidgetComponent} from '../profile-widget/profile-widget.component';
import {ProfileAboutWidgetComponent} from '../profile-about-widget/profile-about-widget.component';
import {FeedComponent} from '../feed/feed.component';

describe('Home index component:', () => {
    let component: HomeComponent;
    let fixture: ComponentFixture<HomeComponent>;           

      beforeEach(() => {
        // refine the test module by declaring the test component
        TestBed.configureTestingModule({
            declarations: [ HomeComponent, ProfileComponent, ProfileWidgetComponent, ProfileAboutWidgetComponent, FeedComponent ],
             schemas: [CUSTOM_ELEMENTS_SCHEMA]
        });

        TestBed.compileComponents();

            // create component and test fixture
        fixture = TestBed.createComponent(HomeComponent);

        // get test component from the fixture
        component = fixture.componentInstance;


    });
    
    it("should initialize proxyService correctly", () =>
    {
        expect(component.ngOnInit).toBeDefined();
    });    
});