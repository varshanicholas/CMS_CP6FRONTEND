
import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { Router } from '@angular/router';
//import { ToastrService } from 'ngx-toastr';
import { Staff } from 'src/app/shared/model/staff';
import { StaffService } from 'src/app/shared/service/staff.service';

@Component({
  selector: 'app-staffs-list',
  templateUrl: './staffs-list.component.html',
  styleUrls: ['./staffs-list.component.scss']
})
export class StaffsListComponent implements OnInit {
  searchTerm: string = ''; // Define and initialize searchTerm
  pageSize: number = 10; // Define and set a default value for pageSize
  page: number = 1; // Define and set the initial page number

  constructor(public staffService: StaffService, private router: Router) { }

  ngOnInit(): void {
    console.log("staff list component");
    this.staffService.getAllStaffs();
  }

  // Search Method
  filteredStaffs() {
    if (!this.searchTerm) {
      return this.staffService.staffs;
    }

    const searchTermLower = this.searchTerm.toLowerCase();

    return this.staffService.staffs.filter(s => {
      const staffCode = `em${s.StaffId}`.toLowerCase();

      return (
        s.PhoneNumber?.toLowerCase().includes(searchTermLower) ||
        staffCode.includes(searchTermLower)
      );
    });
  }

  // Edit Staff
  editStaff(staff: Staff): void {
    console.log(staff);
    this.populateStaffData(staff);
    this.router.navigate(['/staffs/edit/' + staff.StaffId]);
  }

  populateStaffData(staff: Staff) {
    console.log("Inside populate method");
    console.log(staff);
  
    const datePipe = new DatePipe("en-UK");
  
    // Transform DOB to a string in 'yyyy-MM-dd' format
    const formattedDOB = datePipe.transform(staff.Dob, 'yyyy-MM-dd');
    staff.Dob = formattedDOB ? new Date(formattedDOB) : new Date(); // Ensure it's a Date type
  
    // Transform CreatedDate to a string in 'yyyy-MM-dd' format
    const formattedCreatedDate = datePipe.transform(staff.CreatedDate, 'yyyy-MM-dd');
    staff.CreatedDate = formattedCreatedDate ? new Date(formattedCreatedDate) : new Date();
  
    this.staffService.formStaffData = { ...staff };
  }
  

}


// const dobString: string | null = getDOBFromAPI(); // Replace this with your actual API call
// const dob: Date = dobString ? new Date(dobString) : new Date(); // Use a default date if dobString is null





//   populateStaffData(staff: Staff) {
//     console.log("Inside populate method");
//     console.log(staff);

//     const datePipe = new DatePipe("en-UK");
//     staff.DOB = datePipe.transform(staff.DOB, 'yyyy-MM-dd');

//     const formattedDate: any = datePipe.transform(staff.CreatedDate, 'yyyy-MM-dd');
//     staff.CreatedDate = formattedDate;

//     this.staffService.formStaffData = { ...staff };
//   }

//   // Delete Staff
//   // deleteStaff(staff: Staff) {
//   //   if (confirm("Are you sure to DELETE this record?")) {
//   //     staff.IsActive = false;

//   //     this.staffService.updateStaff(staff).subscribe(response => {
//   //       console.log(response);
//   //       this.toastr.success('Staff has been deleted successfully', 'ClinicMngSys');
//   //       this.staffService.getAllStaffs();
//   //     },
//   //       (error) => {
//   //         console.log(error);
//   //         this.toastr.error('Something went wrong! Try again...', 'ClinicMngSys');
//   //       });
//   //   }
//   }
// }



















// // import { Component, OnInit } from '@angular/core';
// // import { DatePipe } from '@angular/common';
// // import { Router } from '@angular/router';
// // import { ToastrService } from 'ngx-toastr';
// // import { Staff } from 'src/app/shared/model/staff';
// // import { StaffService } from 'src/app/shared/service/staff.service';


// // @Component({
// //   selector: 'app-staffs-list',
// //   templateUrl: './staffs-list.component.html',
// //   styleUrls: ['./staffs-list.component.scss']
// // })
// // export class StaffsListComponent implements OnInit {

// //   constructor(public staffService: StaffService) { }

// //   ngOnInit(): void {
// //     console.log("staff list component");
// //        this.staffService.getAllStaffs();
// //   }

  
// //   //Search Method
// //   //1 - Baesd on searchterm, employee Service.employees should populate

// //   filteredStaffs() {
// //     if (!this.searchTerm) {
// //       return this.staffService.staffs;
// //     }

// //     //2 return Filteredemployeelist

// //     const searchTermLower = this.searchTerm.toLowerCase();

// //     return this.staffService.staff.filter(s => {
// //       const staffCode = `em${s.StaffId}`.toLowerCase();

// //       return (
// //         s.Contact?.toLowerCase().includes(searchTermLower) ||
// //         staffCode.includes(searchTermLower)
// //       );
// //     }

// //     );
  
// //   }

// //   // //Edit Employee
// //   // editStaff(staff : Staff) : void {
// //   //   console.log(staff);

// //   //   //Call populate Employee Method
// //   //   this.populateStaffData(staff); //from service

// //   //   //Route to edit component
// //   //   this.router.navigate(['/staffs/edit/' + staff.StaffId])
// //   // }


// //   populateStaffData(staff : Staff) {
// //     console.log("In side populate method");

// //     console.log(staff);
// //     //transform date format as yyyy-MM-dd
// //     var datePipe = new DatePipe ("en-UK");



// //     staff.DOB = datePipe.transform(staff.DOB, 'yyyy-MM-dd');

// //     let formattedDate : any = datePipe.transform((staff.CreatedDate), 'yyyy-MM-dd');

// //     staff.CreatedDate = formattedDate;
// //     this.staffService.formStaffData = {...staff}; //spread operator
// //   }

// //   //Delete 
// //   // deleteStaff(staff: Staff) {
// //   //   //confirmation
// //   //   if(confirm("Are you sure to DELETE this record?")) {

// //   //     //asif deletion, set IsActive = false
// //   //     staff.IsActive = false;

// //   //     this.staffService.updateStaff(staff).subscribe(response => {
// //   //       console.log(response);
// //   //       this.toastr.success('staff has been deleted successfully', 'EMSv2024');
// //   //       this.staffService.getAllStaffs();
// //   //     },
// //   //   (error) => {
// //   //     console.log(error)
// //   //     this.toastr.error('Something wrong! try again...', 'EMSv2024');
// //   //   });
// //   //   }
// // }





















// // import { DatePipe } from '@angular/common';
// // import { Component, OnInit } from '@angular/core';
// // import { Router } from '@angular/router';
// // import { ToastrService } from 'ngx-toastr';
// // import { Employee } from 'src/app/shared/model/employee';
// // import { EmployeeService } from 'src/app/shared/service/employee.service';

// // @Component({
// //   selector: 'app-employees-list', //name of the component - used as tag
// //   templateUrl: './employees-list.component.html',
// //   styleUrls: ['./employees-list.component.scss']
// // })
// // export class EmployeesListComponent implements OnInit {

// //   //declare variables
// //   page: number = 1;
// //   pageSize: number = 5;

// //   searchTerm: string = '';

// //   constructor(public employeeService: EmployeeService , 
// //     private router: Router, private toastr : ToastrService
// //   ) { }

// //   //Life-cycle hook
// //   ngOnInit(): void {
// //     console.log("Hi! I'm Employee List Component");
// //     this.employeeService.getAllEmployees();
// //   }

// //   //Search Method
// //   //1 - Baesd on searchterm, employee Service.employees should populate

// //   filteredEmployees() {
// //     if (!this.searchTerm) {
// //       return this.employeeService.employees;
// //     }

// //     //2 return Filteredemployeelist

// //     const searchTermLower = this.searchTerm.toLowerCase();

// //     return this.employeeService.employees.filter(e => {
// //       const empCode = `em${e.EmployeeId}`.toLowerCase();

// //       return (
// //         e.Contact?.toLowerCase().includes(searchTermLower) ||
// //         empCode.includes(searchTermLower)
// //       );
// //     }

// //     );

// //   }

// //   //Edit Employee
// //   editEmployee(employee : Employee) : void {
// //     console.log(employee);

// //     //Call populate Employee Method
// //     this.populateEmployeeData(employee); //from service

// //     //Route to edit component
// //     this.router.navigate(['/employees/edit/' + employee.EmployeeId])
// //   }

// //   //getting Employee for Populating employee data
// //   populateEmployeeData(employee : Employee) {
// //     console.log("In side populate method");

// //     console.log(employee);
// //     //transform date format as yyyy-MM-dd
// //     var datePipe = new DatePipe ("en-UK");

// //     let formattedDate : any = datePipe.transform((employee.DateOfJoining), 'yyyy-MM-dd');

// //     employee.DateOfJoining = formattedDate;
// //     this.employeeService.formEmployeeData = {...employee}; //spread operator
// //   }

// //   //Delete 
// //   deleteEmployee(employee: Employee) {
// //     //confirmation
// //     if(confirm("Are you sure to DELETE this record?")) {

// //       //asif deletion, set IsActive = false
// //       employee.IsActive = false;

// //       this.employeeService.updateEmployee(employee).subscribe(response => {
// //         console.log(response);
// //         this.toastr.success('Employee has been deleted successfully', 'EMSv2024');
// //         this.employeeService.getAllEmployees();
// //       },
// //     (error) => {
// //       console.log(error)
// //       this.toastr.error('Something wrong! try again...', 'EMSv2024');
// //     });
// //     }
// //   }

// // }


// // import {Department} from "./department";
// // export class Staff {

// //     StaffId: number = 0;
// //     StaffName: string = '';
// //     Gender: string = '';
// //     PhoneNumber: string = '';
// //     Email: string = '';
// //     DOB: Date = new Date();
// //     Address: string = '';
// //     Qualification: string = '';
// //        DepartmentId: number = 0;
// //        IsActive: boolean = false;
// //         CreatedDate: Date = new Date();
// //     //Object Oriented Model
  

// //     department : Department = new Department();


// // }
