import { Injectable } from '@angular/core';
//import { Employee } from '../model/employee';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { error } from 'console';
import { Observable } from 'rxjs';
import { Patient } from '../model/patient';
import { NewAppointment } from '../model/new-appointment';
import { Department } from '../model/department';
import { Doctor } from '../model/doctor';

import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PatientregService {
  //declare variables
  //list of patient

  patients: Patient[] = [];
  formPatientData: Patient = new Patient();

  appointment: NewAppointment[] = [];
  department: Department[] = [];
  doctor: Doctor[] = [];
  formAppointmentData: NewAppointment = new NewAppointment();

  //DI: Httpclient

  constructor(private httpClient: HttpClient) {}

  //1- Get all employees

  async getAllPatients(): Promise<Patient[]> {
    try {
      const response = await this.httpClient
        .get<any>(`${environment.apiUrl}receptionist/Patientslist`)
        .toPromise();
      if (response?.Value) {
        return response.Value;
      } else {
        console.error('No patients data found');
        return [];
      }
    } catch (error) {
      console.error('Error occurred while fetching patients:', error);
      return [];
    }
  }

  //2-insert an employee

  insertPatient(patient: Patient): Observable<any> {
    console.log('Insert Patient: In Service');
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.httpClient.post(
      `${environment.apiUrl}receptionist/InsertPatient`,
      patient,
      { headers }
    );
  }

  // 4-update an employee
  updatePatient(patient: Patient): Observable<any> {
    console.log('Update Patient: In Service');
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.httpClient.put(
      `${environment.apiUrl}receptionist/updatepatient/${patient.PatientId}`,
      patient,
      { headers }
    );
  }

  //3-Get all departments

  getAllDepartments(): void {
    this.httpClient
      .get(environment.apiUrl + 'appointment/d2')
      .toPromise()
      .then((response: any) => {
        if (response?.Value) {
          this.department = response.Value;
          console.log(this.department);
        }
      })
      .catch((error) => {
        console.log('Error occured: ', error);
      });
  }

  getDoctorsByDepartmentId(departmentId: number): Observable<Doctor[]> {
    return this.httpClient.get<Doctor[]>(
      `${environment.apiUrl}Appointment/doctors/${departmentId}`
    );
  }

  getConsultationFeeByDoctorId(doctorId: number): Observable<number> {
    return this.httpClient.get<number>(
      `${environment.apiUrl}Appointment/${doctorId}`
    );
  }

  insertAppointment(newAppointment: NewAppointment): Observable<any> {
    console.log('Insert Patient: In Service');
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.httpClient.post(
      `${environment.apiUrl}Appointment/SaveAppointment`,
      newAppointment,
      { headers }
    );
  }
}
