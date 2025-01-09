import { Department } from "./department";
import { Doctor } from "./doctor";
import { Patient } from "./patient";

export class NewAppointment {

    "AppointmentId":number=0;
    "DoctorId":number=0;
    "DepartmentId":number=0;
    "PatientId":number=0;
    "AppointmentDate":Date =new Date();
    "TokenNumber":number=0;
    "ConsultationFees":number=0;
    "RegistrationFees":number=0;
    "ConsultationStatus":boolean=false;
    "DocAvlId":number=0;
    "CreatedDate":Date =new Date();

     //object oriented model

     department: Department =new Department();
     doctor: Doctor =new Doctor();
     patient:Patient=new Patient();
}
