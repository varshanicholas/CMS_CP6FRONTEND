import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientregAddComponent } from './patientreg-add.component';

describe('PatientregAddComponent', () => {
  let component: PatientregAddComponent;
  let fixture: ComponentFixture<PatientregAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PatientregAddComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PatientregAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
