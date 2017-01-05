import {  
  TestBed,
  ComponentFixture 
} from '@angular/core/testing';

import {BrowserDynamicTestingModule, platformBrowserDynamicTesting} from '@angular/platform-browser-dynamic/testing'; 
import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {ProfileManageComponent} from  './profile-manage.component';
import {ProfileManageService} from './profile-manage.service';
import {BaseRequestOptions, Http, ConnectionBackend, HttpModule} from '@angular/http';
import {MockBackend} from '@angular/http/testing';
import {Injector,ReflectiveInjector} from '@angular/core';

describe('Profile component:', () => {
    let component: ProfileManageComponent;
    let fixture: ComponentFixture<ProfileManageComponent>;           
    let profileServiceStub : {};
    let profileService: ProfileManageService;
    
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
            declarations: [ ProfileManageComponent ],
            providers: [{ provide: Http, useValue: http }, { provide: ProfileManageService, useValue: profileServiceStub }],
            schemas: [CUSTOM_ELEMENTS_SCHEMA]
        });

        TestBed.compileComponents();
            // create component and test fixture
        fixture = TestBed.createComponent(ProfileManageComponent);
        // get test component from the fixture
        component = fixture.componentInstance;        
        profileService = fixture.debugElement.injector.get(ProfileManageService);
    });
    
    it("should initialize proxyService correctly", () =>
    {
        expect(component.getProfile).toBeDefined();
    });    
});