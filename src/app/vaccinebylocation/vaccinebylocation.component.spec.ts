import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VaccinebylocationComponent } from './vaccinebylocation.component';

describe('VaccinebylocationComponent', () => {
  let component: VaccinebylocationComponent;
  let fixture: ComponentFixture<VaccinebylocationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VaccinebylocationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VaccinebylocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
