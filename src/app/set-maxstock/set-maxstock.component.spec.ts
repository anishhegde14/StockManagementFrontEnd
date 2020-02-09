import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SetMaxstockComponent } from './set-maxstock.component';

describe('SetMaxstockComponent', () => {
  let component: SetMaxstockComponent;
  let fixture: ComponentFixture<SetMaxstockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SetMaxstockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SetMaxstockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
