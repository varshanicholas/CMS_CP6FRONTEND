import { Injectable } from '@angular/core';
import { Staff } from '../model/staff';
 import { Department } from '../model/department';
 import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

//import { StaffService } from './staff.service';


@Injectable({
  providedIn: 'root'
})
export class StaffService {

  //declare variables
  //List of staffs
  staffs: Staff[] = []; //employees data will be stored her, when getAllEmployees() is executed
  departments: Department[] = [];
  formStaffData: Staff = new Staff();


//   DateOfJoining: any;

  //Constructor injection-dependency injection
  //DI: httpClient
  constructor(private httpClient: HttpClient) { }

//   // 1 - Get All Employee
  getAllStaffs() : void
  {
    this.httpClient.get(environment.apiUrl + 'staff') //restapi url
    .toPromise()
    .then((response?: any) =>{
      if(response.Value)
      {
        this.staffs = response.Value;
        console.log(this.staffs);
      }
    })
    .catch((error) => {
      console.log(error);
    });
  }

  //2 - Insert/Post an Employee
  InsertPostStaff( staff: Staff): Observable<any> {
    console.log("Insert: In service");
    return this.httpClient.post(environment.apiUrl + 'staff',staff);
  }

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

  //4 - Update an Employee
  updatePutStaff( staff: Staff): Observable<any> {
    console.log("Update: In service");
    return this.httpClient.put(environment.apiUrl + 'staff/'+ staff.StaffId, staff);
  }
 }



//  import { Injectable } from '@angular/core';
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
