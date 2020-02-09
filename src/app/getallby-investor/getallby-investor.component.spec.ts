import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetallbyInvestorComponent } from './getallby-investor.component';

describe('GetallbyInvestorComponent', () => {
  let component: GetallbyInvestorComponent;
  let fixture: ComponentFixture<GetallbyInvestorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetallbyInvestorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetallbyInvestorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
