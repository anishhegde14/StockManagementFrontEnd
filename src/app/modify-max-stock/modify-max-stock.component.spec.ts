import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifyMaxStockComponent } from './modify-max-stock.component';

describe('ModifyMaxStockComponent', () => {
  let component: ModifyMaxStockComponent;
  let fixture: ComponentFixture<ModifyMaxStockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModifyMaxStockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifyMaxStockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
