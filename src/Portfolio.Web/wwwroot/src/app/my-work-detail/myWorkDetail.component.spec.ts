import {  
  TestBed,
  ComponentFixture 
} from '@angular/core/testing';

import {BrowserDynamicTestingModule, platformBrowserDynamicTesting} from '@angular/platform-browser-dynamic/testing'; 

import {MyWorkDetailComponent} from  './my-work-detail.component';
import {ProfileComponent} from '../profile/profile.component';
import {ProfileWidgetComponent} from '../profile-widget/profileWidget.component';
import {ProfileAboutWidgetComponent} from '../profile-about-widget/profileAboutWidget.component';
import {FeedComponent} from '../feed/feed.component';

describe('Home index component:', () => {
    let component: MyWorkDetailComponent;
    let fixture: ComponentFixture<MyWorkDetailComponent>;           

    beforeEach(() => {
        // refine the test module by declaring the test component
        TestBed.configureTestingModule({
            declarations: [ MyWorkDetailComponent, ProfileComponent, ProfileWidgetComponent, ProfileAboutWidgetComponent, FeedComponent ],
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