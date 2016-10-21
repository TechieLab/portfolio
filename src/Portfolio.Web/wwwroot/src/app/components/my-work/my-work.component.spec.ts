import {  
  TestBed,
  ComponentFixture 
} from '@angular/core/testing';

import {BaseRequestOptions, Http, ConnectionBackend, HttpModule} from '@angular/http';
import {MockBackend} from '@angular/http/testing';
import {Injector,ReflectiveInjector} from '@angular/core';
import {BrowserDynamicTestingModule, platformBrowserDynamicTesting} from '@angular/platform-browser-dynamic/testing'; 
import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {MyWorkComponent} from  './My-Work.component';
import { IsometricGrid } from './my-work.directive';
import {MyWorkService} from './my-work.service';

describe('MyWork index component:', () => {
    let component: MyWorkComponent;
    let fixture: ComponentFixture<MyWorkComponent>;           

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
            declarations: [ MyWorkComponent, IsometricGrid ],
            schemas: [CUSTOM_ELEMENTS_SCHEMA],
            providers: [{provide: Http, useValue: http }, MyWorkService]
        });

        TestBed.compileComponents();

            // create component and test fixture
        fixture = TestBed.createComponent(MyWorkComponent);

        // get test component from the fixture
        component = fixture.componentInstance;


    });
    
    it("should define getProjectList correctly", () =>
    {
        expect(component.getProjectList).toBeDefined();
    });    
});