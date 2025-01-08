import { TestBed } from '@angular/core/testing';

import { StaffService } from './staff.service';

describe('EmployeeService', () => {
  let service: StaffService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StaffService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
//import { TestBed } from '@angular/core/testing';












// describe('StaffService', () => {
//   let service: StaffService;

//   beforeEach(() => {
//     TestBed.configureTestingModule({});
//     service = TestBed.inject(StaffService);
//   });

//   it('should be created', () => {
//     expect(service).toBeTruthy();
//   });
// });








// import { Injectable } from '@angular/core';
// import { Employee } from '../model/employee';
// import { Department } from '../model/department';
// import { HttpClient } from '@angular/common/http';
// import { environment } from 'src/environments/environment';
// import { Observable } from 'rxjs';

// @Injectable({
//   providedIn: 'root'
// })
// export class EmployeeService {

//   //declare variables
//   //List of employees
//   employees: Employee[] = []; //employees data will be stored her, when getAllEmployees() is executed
//   departments: Department[] = [];
//   formEmployeeData: Employee = new Employee();
//   DateOfJoining: any;

//   //Constructor injection-dependency injection
//   //DI: httpClient
//   constructor(private httpClient: HttpClient) { }

//   // 1 - Get All Employee
//   getAllEmployees() : void
//   {
//     this.httpClient.get(environment.apiUrl + 'employees') //restapi url
//     .toPromise()
//     .then((response?: any) =>{
//       if(response.Value)
//       {
//         this.employees = response.Value;
//         console.log(this.employees);
//       }
//     })
//     .catch((error) => {
//       console.log(error);
//     });
//   }

//   //2 - Insert/Post an Employee
//   insertEmployee( employee: Employee): Observable<any> {
//     console.log("Insert: In service");
//     return this.httpClient.post(environment.apiUrl + 'employees',employee);
//   }

//   //3 - Department - Get all departments
//   getAllDepartments() : void
//   {
//     this.httpClient.get(environment.apiUrl + 'employees/v2')
//     .toPromise()
//     .then((response?: any) =>{
//       if(response.Value)
//       {
//         this.departments = response.Value;
//         console.log(this.departments);
//       }
//     })
//     .catch((error) => {
//       console.log('Error occured: ',error);
//     });
//   }

//   //4 - Update an Employee
//   updateEmployee( employee: Employee): Observable<any> {
//     console.log("Update: In service");
//     return this.httpClient.put(environment.apiUrl + 'employees/'+ employee.EmployeeId, employee);
//   }
// }

