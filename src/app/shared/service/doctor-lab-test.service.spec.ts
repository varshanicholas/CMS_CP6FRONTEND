import { TestBed } from '@angular/core/testing';

import { DoctorLabTestService } from './doctor-lab-test.service';

describe('DoctorLabTestService', () => {
  let service: DoctorLabTestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DoctorLabTestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
