import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VaccineByDistrictComponent } from './vaccine-by-district.component';

describe('VaccineByDistrictComponent', () => {
  let component: VaccineByDistrictComponent;
  let fixture: ComponentFixture<VaccineByDistrictComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VaccineByDistrictComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VaccineByDistrictComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
