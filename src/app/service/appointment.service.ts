import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Doctor } from '../shared/model/doctor';
import { Appointment } from '../shared/model/appointment.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {
 

//List of employees
// doctors: Doctor[] = []; //employees data will be stored her, when getAllEmployees() is executed
 appointments: Appointment[]=[]; 

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
}