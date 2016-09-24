import {  
  TestBed,
  ComponentFixture 
} from '@angular/core/testing';

import {BrowserDynamicTestingModule, platformBrowserDynamicTesting} from '@angular/platform-browser-dynamic/testing'; 

import {MyWorkDetailComponent} from  './my-work-detail.component';

describe('My Work Detail component:', () => {
    let component: MyWorkDetailComponent;
    let fixture: ComponentFixture<MyWorkDetailComponent>;           

    beforeEach(() => {
        // refine the test module by declaring the test component
        TestBed.configureTestingModule({
            declarations: [ MyWorkDetailComponent ],
        });

        TestBed.compileComponents();

            // create component and test fixture
        fixture = TestBed.createComponent(MyWorkDetailComponent);

        // get test component from the fixture
        component = fixture.componentInstance;


    });
    
    it("should initialize proxyService correctly", () =>
    {
        
    });    
});