import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewProfileOfManagerComponent } from './view-profile-of-manager.component';

describe('ViewProfileOfManagerComponent', () => {
  let component: ViewProfileOfManagerComponent;
  let fixture: ComponentFixture<ViewProfileOfManagerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewProfileOfManagerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewProfileOfManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
