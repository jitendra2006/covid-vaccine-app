import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VaccineslotformComponent } from './vaccineslotform.component';

describe('VaccineslotformComponent', () => {
  let component: VaccineslotformComponent;
  let fixture: ComponentFixture<VaccineslotformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VaccineslotformComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VaccineslotformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
