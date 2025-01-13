import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { PatientHistory } from '../model/patient-history';

@Injectable({
  providedIn: 'root'
})
export class PatientHistoryService {

  constructor(private httpClient: HttpClient) { }

   // Fetch patient history by doctor ID
   getPatientHistoryByDoctor(docId: number): Observable<PatientHistory[]> {
    return this.httpClient.get<PatientHistory[]>(
      `${environment.apiUrl}PatientHistoryDoctor/PatientHistory/${docId}`
    );
  }

  // Fetch detailed patient history by appointment ID
  // getPatientHistoryByAppointment(patientId: number): Observable<PatientHistory> {
  //   return this.httpClient.get<PatientHistory>(
  //     `${environment.apiUrl}PatientHistoryDoctor/PatientHistory/${patientId}`
  //   );
  // }

  getPatientHistory(patientId: number): Observable<PatientHistory[]> {
    return this.httpClient.get<PatientHistory[]>(`${environment.apiUrl}PatientHistoryDoctor/PatientHistory/${patientId}`);
  }
}

