import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientregListComponent } from './patientreg-list.component';

describe('PatientregListComponent', () => {
  let component: PatientregListComponent;
  let fixture: ComponentFixture<PatientregListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PatientregListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PatientregListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
