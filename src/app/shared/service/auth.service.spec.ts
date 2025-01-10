import { TestBed } from '@angular/core/testing';
<<<<<<<< HEAD:src/app/shared/service/doctor.service.spec.ts
import { DoctorService } from './doctor.service';


describe('DoctorService', () => {
  let service: DoctorService;
========

import { AuthService } from './auth.service';

describe('AuthService', () => {
  let service: AuthService;
>>>>>>>> 0d007009698a20ba156b8eb72fb1e8b4ddc0a5e0:src/app/shared/service/auth.service.spec.ts

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
