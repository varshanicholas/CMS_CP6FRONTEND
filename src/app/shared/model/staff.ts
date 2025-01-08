import {Department} from "./department";
export class Staff {

    StaffId: number = 0;
    StaffName: string = '';
    Gender: string = '';
    PhoneNumber: string = '';
    Email: string = '';
    Dob: Date = new Date();
    Address: string = '';
    Qualification: string = '';
       DepartmentId: number = 0;
       IsActive: boolean = false;
        CreatedDate: Date = new Date();
    //Object Oriented Model
  

    department : Department = new Department();


}


// import { Department } from "./department";

// export class Staff {
//     StaffId: number = 0;
//     StaffName: string = '';
//     Gender: string = '';
//     PhoneNumber: string = '';
//     Email: string = '';
//  // Define DOB as a string
//     Address: string = '';
//     Qualification: string = '';
//     DepartmentId: number = 0;
//     IsActive: boolean = false;
//     CreatedDate: string = ''; // Define CreatedDate as a string

//     department: Department = new Department();
// }



// EmployeeId: number = 0;
// EmployeeName: string = '';
// Designation: string = '';
// DateOfJoining: Date = new Date();
// DepartmentId: number = 0;
// Contact: string = '';
// IsActive: boolean = false;
// //Object Oriented Model
// department : Department = new Department();

    // public int EmployeeId { get; set; }

    // public string EmployeeName { get; set; } = null!;

    // public string? Designation { get; set; }

    // public DateTime? DateOfJoining { get; set; }

    // public int DepartmentId { get; set; }

    // public string? Contact { get; set; }

    // public bool? IsActive { get; set; }

    // public virtual TblDepartment? Department { get; set; } = null!;


// using System;
// using System.Collections.Generic;

// namespace CMS_CP6FINAL.Model
// {
//     public partial class Staff
//     {
//         public int StaffId { get; set; }

//         public string StaffName { get; set; } = null!;

//         public string Gender { get; set; } = null!;

//         public string PhoneNumber { get; set; } = null!;

//         public string Email { get; set; } = null!;

//         public DateTime Dob { get; set; }

//         public string Address { get; set; } = null!;

//         public string Qualification { get; set; } = null!;

//         public int DepartmentId { get; set; }

//         public DateTime CreatedDate { get; set; }

//         public bool IsActive { get; set; }

//         public virtual Department? Department { get; set; } // This should not be ignored to view staff along with department

//         [System.Text.Json.Serialization.JsonIgnore]
//         public virtual ICollection<DoctorReferral> DoctorReferrals { get; set; } = new List<DoctorReferral>();

//         [System.Text.Json.Serialization.JsonIgnore]
//         public virtual ICollection<Doctor> Doctors { get; set; } = new List<Doctor>();

//         [System.Text.Json.Serialization.JsonIgnore]
//         public virtual ICollection<LabTestPrescription> LabTestPrescriptions { get; set; } = new List<LabTestPrescription>();

//         [System.Text.Json.Serialization.JsonIgnore]
//         public virtual ICollection<MainPrescription> MainPrescriptions { get; set; } = new List<MainPrescription>();

//         [System.Text.Json.Serialization.JsonIgnore]
//         public virtual ICollection<MedicinePrescription> MedicinePrescriptions { get; set; } = new List<MedicinePrescription>();

//         [System.Text.Json.Serialization.JsonIgnore]
//         public virtual ICollection<UserRegistration> UserRegistrations { get; set; } = new List<UserRegistration>();
//     }
// }
