import {  
  TestBed,
  ComponentFixture 
} from '@angular/core/testing';

import {BrowserDynamicTestingModule, platformBrowserDynamicTesting} from '@angular/platform-browser-dynamic/testing'; 
import {CUSTOM_ELEMENTS_SCHEMA,  ViewContainerRef} from '@angular/core';
import {ActivatedRoute,RouterOutletMap} from '@angular/router';
import {AppComponent} from './app.component';
import {LayoutComponent} from './layout/layout.component';
import { IsometricGrid } from './my-work/my-work.directive';

describe('Home index component:', () => {
    let component: AppComponent;
    let fixture: ComponentFixture<AppComponent>;           
    let activatedRoute : ActivatedRoute;

    // TestBed.initTestEnvironment(
    //      BrowserDynamicTestingModule, platformBrowserDynamicTesting());

    beforeEach(() => {
        // refine the test module by declaring the test component
        TestBed.configureTestingModule({
            declarations: [ AppComponent, LayoutComponent , IsometricGrid],
            schemas: [CUSTOM_ELEMENTS_SCHEMA],
            providers: [{provide :ActivatedRoute, useValue: activatedRoute}, RouterOutletMap,  ViewContainerRef]
        });

        TestBed.compileComponents();

            // create component and test fixture
        fixture = TestBed.createComponent(AppComponent);

        // get test component from the fixture
        component = fixture.componentInstance;
    });
    
    it("should initialize proxyService correctly", () =>
    {
        
    });    
});