import {  
  TestBed,
  ComponentFixture 
} from '@angular/core/testing';

import {BrowserDynamicTestingModule, platformBrowserDynamicTesting} from '@angular/platform-browser-dynamic/testing'; 

import {ProfileComponent} from  './profile.component';
import {ProfileWidgetComponent} from '../profile-widget/profileWidget.component';
import {ProfileAboutWidgetComponent} from '../profile-about-widget/profileAboutWidget.component';
import {FeedComponent} from '../feed/feed.component';

describe('Home index component:', () => {
    let component: ProfileComponent;
    let fixture: ComponentFixture<ProfileComponent>;           

    beforeEach(() => {
        // refine the test module by declaring the test component
        TestBed.configureTestingModule({
            declarations: [ ProfileComponent, ProfileComponent, ProfileWidgetComponent, ProfileAboutWidgetComponent, FeedComponent ],
        });

        TestBed.compileComponents();

            // create component and test fixture
        fixture = TestBed.createComponent(ProfileComponent);

        // get test component from the fixture
        component = fixture.componentInstance;


    });
    
    it("should initialize proxyService correctly", () =>
    {
        expect(component.ngOnInit).toBeDefined();
    });    
});