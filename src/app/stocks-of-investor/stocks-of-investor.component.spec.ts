import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StocksOfInvestorComponent } from './stocks-of-investor.component';

describe('StocksOfInvestorComponent', () => {
  let component: StocksOfInvestorComponent;
  let fixture: ComponentFixture<StocksOfInvestorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StocksOfInvestorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StocksOfInvestorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
