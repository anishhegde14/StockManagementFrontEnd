import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifyInvestorComponent } from './modify-investor.component';

describe('ModifyInvestorComponent', () => {
  let component: ModifyInvestorComponent;
  let fixture: ComponentFixture<ModifyInvestorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModifyInvestorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifyInvestorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
