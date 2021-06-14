import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VaccineByPinComponent } from './vaccine-by-pin.component';

describe('VaccineByPinComponent', () => {
  let component: VaccineByPinComponent;
  let fixture: ComponentFixture<VaccineByPinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VaccineByPinComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VaccineByPinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
