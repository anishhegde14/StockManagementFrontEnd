import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetAllInvestorComponent } from './get-all-investor.component';

describe('GetAllInvestorComponent', () => {
  let component: GetAllInvestorComponent;
  let fixture: ComponentFixture<GetAllInvestorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetAllInvestorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetAllInvestorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
