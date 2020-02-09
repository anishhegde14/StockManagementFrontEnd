import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetallstocksComponent } from './getallstocks.component';

describe('GetallstocksComponent', () => {
  let component: GetallstocksComponent;
  let fixture: ComponentFixture<GetallstocksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetallstocksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetallstocksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
