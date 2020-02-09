import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetallbyTransactionComponent } from './getallby-transaction.component';

describe('GetallbyTransactionComponent', () => {
  let component: GetallbyTransactionComponent;
  let fixture: ComponentFixture<GetallbyTransactionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetallbyTransactionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetallbyTransactionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
