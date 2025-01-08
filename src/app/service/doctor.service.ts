import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Doctor } from '../shared/model/doctor';

@Injectable({
  providedIn: 'root'
})
export class DoctorService {

//   private apiUrl = 'http://https://localhost:7066/api'; // Replace with actual API URL

//   constructor(private http: HttpClient) {}

//   getTodaysAppointments(): Observable<any[]> {
//     return this.http.get<any[]>(`${this.apiUrl}/ViewPatientAppointment/today`);
//   }
// }

 //declare variables
  //List of employees
  // doctors: Doctor[] = []; //employees data will be stored her, when getAllEmployees() is executed
  

  // //Constructor injection-dependency injection
  // //DI: httpClient
  // constructor(private httpClient: HttpClient) { }

  // // 1 - Get All Employee
  // getTodayAppointments() : void
  // {
  //   this.httpClient.get(environment.apiUrl + 'doctors') //restapi url
  //   .toPromise()
  //   .then((response?: any) =>{
  //     if(response.Value)
  //     {
  //       this.doctors = response.Value;
  //       console.log(this.doctors);
  //     }
  //   })
  //   .catch((error) => {
  //     console.log(error);
  //   });
  // }
}