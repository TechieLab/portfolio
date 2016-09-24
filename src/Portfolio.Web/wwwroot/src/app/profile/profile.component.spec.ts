import {  
  TestBed,
  ComponentFixture 
} from '@angular/core/testing';

import {BrowserDynamicTestingModule, platformBrowserDynamicTesting} from '@angular/platform-browser-dynamic/testing'; 
import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {ProfileComponent} from  './profile.component';
import {ProfileService} from './profile.service';
import {BaseRequestOptions, Http, ConnectionBackend, HttpModule} from '@angular/http';
import {MockBackend} from '@angular/http/testing';
import {Injector,ReflectiveInjector} from '@angular/core';

describe('Profile component:', () => {
    let component: ProfileComponent;
    let fixture: ComponentFixture<ProfileComponent>;           
    let profileServiceStub : {};
    let profileService : ProfileService;


    beforeEach(() => {
        // refine the test module by declaring the test component
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

        TestBed.configureTestingModule({
            declarations: [ ProfileComponent ],
            providers:[{provide: Http, useValue: http }, {provide: ProfileService, useValue: profileServiceStub }],
            schemas: [CUSTOM_ELEMENTS_SCHEMA]
        });

        TestBed.compileComponents();

            // create component and test fixture
        fixture = TestBed.createComponent(ProfileComponent);

        // get test component from the fixture
        component = fixture.componentInstance;

        
        
         profileService = fixture.debugElement.injector.get(ProfileService);

    });
    
    it("should initialize proxyService correctly", () =>
    {
        expect(component.getProfile).toBeDefined();
    });    
});