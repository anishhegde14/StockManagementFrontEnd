import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetAllStockComponent } from './get-all-stock.component';

describe('GetAllStockComponent', () => {
  let component: GetAllStockComponent;
  let fixture: ComponentFixture<GetAllStockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetAllStockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetAllStockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
