import {  
  TestBed,
  ComponentFixture 
} from '@angular/core/testing';

import {BaseRequestOptions, Http, ConnectionBackend, HttpModule} from '@angular/http';
import {MockBackend} from '@angular/http/testing';
import {Injector,ReflectiveInjector} from '@angular/core';
import {BrowserDynamicTestingModule, platformBrowserDynamicTesting} from '@angular/platform-browser-dynamic/testing'; 
import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {BlogComponent} from  './blog.component';
import {BlogService} from './blog.service';

describe('Blog component:', () => {
    let component: BlogComponent;
    let fixture: ComponentFixture<BlogComponent>;           
   
    beforeEach(() => {
         var injector = ReflectiveInjector.resolveAndCreate([
        BaseRequestOptions,
        MockBackend,
        {provide: Http, useFactory:
            function(backend, defaultOptions) {
                return new Http(backend, defaultOptions);
            },
            deps: [MockBackend, BaseRequestOptions]}
        ]);
        var http = injector.get(Http);

        // refine the test module by declaring the test component
        TestBed.configureTestingModule({
            declarations: [ BlogComponent],
            providers:[{provide: Http, useValue: http }, BlogService],
            schemas: [CUSTOM_ELEMENTS_SCHEMA]
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