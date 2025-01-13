import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DoctorLabTestViewModel } from '../model/doctor-lab-test-view-model';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DoctorLabTestService {

  constructor(private httpClient: HttpClient) { }
   // Fetch lab test reports by appointment ID
   getLabTestReports(appointmentId: number): Observable<DoctorLabTestViewModel[]> {
    return this.httpClient.get<DoctorLabTestViewModel[]>(
      `${environment.apiUrl}Doctor/GetLabTestReports/${appointmentId}`
    );
  }
}
