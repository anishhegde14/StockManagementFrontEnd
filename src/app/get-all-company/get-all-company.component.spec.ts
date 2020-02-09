import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetAllCompanyComponent } from './get-all-company.component';

describe('GetAllCompanyComponent', () => {
  let component: GetAllCompanyComponent;
  let fixture: ComponentFixture<GetAllCompanyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetAllCompanyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetAllCompanyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
