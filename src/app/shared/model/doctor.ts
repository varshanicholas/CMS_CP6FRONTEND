


import { Staff } from "./staff";

export class Doctor {
    DoctorId: number = 0;
    StaffId: number = 0;
    ConsultationFee: number = 0;
    SpecializationId: number = 0;
    IsActive: boolean = false;
  
    Staff: Staff = new Staff();
  DoctorName: string | undefined;
   
  }



