import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorLabTestListComponent } from './doctor-lab-test-list.component';

describe('DoctorLabTestListComponent', () => {
  let component: DoctorLabTestListComponent;
  let fixture: ComponentFixture<DoctorLabTestListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DoctorLabTestListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DoctorLabTestListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
