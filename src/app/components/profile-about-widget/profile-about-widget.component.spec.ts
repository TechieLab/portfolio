import {  
  TestBed,
  ComponentFixture 
} from '@angular/core/testing';

import {BrowserDynamicTestingModule, platformBrowserDynamicTesting} from '@angular/platform-browser-dynamic/testing'; 
import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {ProfileAboutWidgetComponent} from  './profile-about-widget.component';

describe('Profile About Widget Component:', () => {
    let component: ProfileAboutWidgetComponent;
    let fixture: ComponentFixture<ProfileAboutWidgetComponent>;           

    beforeEach(() => {
        // refine the test module by declaring the test component
        TestBed.configureTestingModule({
            declarations: [ ProfileAboutWidgetComponent ],
            schemas: [CUSTOM_ELEMENTS_SCHEMA]
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