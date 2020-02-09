import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateInvestorComponent } from './create-investor.component';

describe('CreateInvestorComponent', () => {
  let component: CreateInvestorComponent;
  let fixture: ComponentFixture<CreateInvestorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateInvestorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateInvestorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
