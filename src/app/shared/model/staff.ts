import { Department } from './department';
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

  department: Department = new Department();
}

