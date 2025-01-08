import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientregEditComponent } from './patientreg-edit.component';

describe('PatientregEditComponent', () => {
  let component: PatientregEditComponent;
  let fixture: ComponentFixture<PatientregEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PatientregEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PatientregEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
