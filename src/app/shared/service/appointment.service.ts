import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Doctor } from '../model/doctor';
import { Appointment } from '../model/appointment.model';
import { Observable } from 'rxjs';
import { StartConsultation } from '../model/DoctorStartConsultationViewModel';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {
 

//List of employees
// doctors: Doctor[] = []; //employees data will be stored her, when getAllEmployees() is executed
 appointments: Appointment[]=[]; 
 startConsultation:StartConsultation[]=[];

//Constructor injection-dependency injection
//DI: httpClient
constructor(private httpClient: HttpClient) { }

// 1 - Get All Employee
getTodayAppointments(docId:any) : void
{
  this.httpClient.get(environment.apiUrl + 'ViewPatientAppointment/today/' + docId) //restapi url
  .toPromise()
  .then((response?: any) =>{
    console.log("Ïn service");
    if(response)
    {
      this.appointments = response;
      console.log(this.appointments);
    }
  })
  .catch((error) => {
    console.log(error);
  });
}
getTodaysAppointments(doctorId: number): Observable<Appointment[]> {
  return this.httpClient.get<Appointment[]>(
    `${environment.apiUrl}ViewPatientAppointment/today/${doctorId}`
  );
}

// Method to insert a new consultation
insertStartConsultation(doctor: StartConsultation): Observable<any> {
  console.log("Insert: In service");
  return this.httpClient.post(environment.apiUrl + 'DoctorStartConsultation/start-consultation',doctor);
}


/*//3 - patient - Get all patient
getAllPatients() : void
{
  this.httpClient.get(environment.apiUrl + 'patient/v2')
  .toPromise()
  .then((response?: any) =>{
    if(response.Value)
    {
      this.patients = response.Value;
     console.log(this.patients);
    }
  })
  .catch((error:any) => {
    console.log('Error occured: ',error);
  });
}*/


}


  