import {  
  TestBed,
  ComponentFixture 
} from '@angular/core/testing';

import {BrowserDynamicTestingModule, platformBrowserDynamicTesting} from '@angular/platform-browser-dynamic/testing'; 

import {HeaderComponent} from  './header.component';
import {ProfileComponent} from '../profile/profile.component';
import {ProfileWidgetComponent} from '../profile-widget/profileWidget.component';
import {ProfileAboutWidgetComponent} from '../profile-about-widget/profileAboutWidget.component';

describe('Header index component:', () => {
    let component: HeaderComponent;
    let fixture: ComponentFixture<HeaderComponent>;           

     beforeEach(() => {
        // refine the test module by declaring the test component
        TestBed.configureTestingModule({
            declarations: [ HeaderComponent, ProfileComponent, ProfileWidgetComponent, ProfileAboutWidgetComponent, HeaderComponent ],
        });

        TestBed.compileComponents();

            // create component and test fixture
        fixture = TestBed.createComponent(HeaderComponent);

        // get test component from the fixture
        component = fixture.componentInstance;


    });
    
    it("should initialize proxyService correctly", () =>
    {
        
    });    
});