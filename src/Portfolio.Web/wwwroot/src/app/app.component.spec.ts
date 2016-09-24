import {  
  TestBed,
  ComponentFixture 
} from '@angular/core/testing';

import {BrowserDynamicTestingModule, platformBrowserDynamicTesting} from '@angular/platform-browser-dynamic/testing'; 

import {AppComponent} from './app.component';

describe('Home index component:', () => {
    let component: AppComponent;
    let fixture: ComponentFixture<AppComponent>;           

    // TestBed.initTestEnvironment(
    //      BrowserDynamicTestingModule, platformBrowserDynamicTesting());

    beforeEach(() => {
        // refine the test module by declaring the test component
        TestBed.configureTestingModule({
            declarations: [ AppComponent ],
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