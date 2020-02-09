import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetallbyManagerComponent } from './getallby-manager.component';

describe('GetallbyManagerComponent', () => {
  let component: GetallbyManagerComponent;
  let fixture: ComponentFixture<GetallbyManagerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetallbyManagerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetallbyManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
