import {  
  TestBed,
  ComponentFixture 
} from '@angular/core/testing';
import {RouterOutlet,  RouterOutletMap} from '@angular/router';

import {BrowserDynamicTestingModule, platformBrowserDynamicTesting} from '@angular/platform-browser-dynamic/testing'; 
import {CUSTOM_ELEMENTS_SCHEMA, ViewContainerRef} from '@angular/core';
import {LayoutComponent} from  './layout.component';
import {HeaderComponent} from '../header/header.component';

describe('Layout index component:', () => {
    let component: LayoutComponent;
    let fixture: ComponentFixture<LayoutComponent>;           


    beforeEach(() => {
        // refine the test module by declaring the test component
        TestBed.configureTestingModule({
            declarations: [ LayoutComponent, HeaderComponent, RouterOutlet],
            schemas: [CUSTOM_ELEMENTS_SCHEMA],
            providers: [RouterOutletMap, ViewContainerRef]
        });

        TestBed.compileComponents();

            // create component and test fixture
        fixture = TestBed.createComponent(LayoutComponent);

        // get test component from the fixture
        component = fixture.componentInstance;


    });
    
    it("should initialize proxyService correctly", () =>
    {
        
    });    
});