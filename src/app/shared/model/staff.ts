
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
//     Dob: Date = new Date();
//     Address: string = '';
//     Qualification: string = '';
//     DepartmentId: number = 0;
//     IsActive: boolean = false;
//     CreatedDate: Date = new Date();
//     department: Department = new Department();
// }












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


   


