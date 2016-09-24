import {  
  TestBed,
  ComponentFixture 
} from '@angular/core/testing';

import {BrowserDynamicTestingModule, platformBrowserDynamicTesting} from '@angular/platform-browser-dynamic/testing'; 

import {BlogComponent} from  './blog.component';

describe('Blog component:', () => {
    let component: BlogComponent;
    let fixture: ComponentFixture<BlogComponent>;           
   
    beforeEach(() => {
        // refine the test module by declaring the test component
        TestBed.configureTestingModule({
            declarations: [ BlogComponent],
        });

        TestBed.compileComponents();

            // create component and test fixture
        fixture = TestBed.createComponent(BlogComponent);

        // get test component from the fixture
        component = fixture.componentInstance;


    });
    
    it("should initialize getBlog correctly", () =>
    {
        expect(component.getBlog).toBeDefined();
    });    
});