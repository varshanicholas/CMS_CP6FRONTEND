import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Department } from 'src/app/shared/model/department';
import { Doctor } from 'src/app/shared/model/doctor';
import { PatientregService } from 'src/app/shared/service/patientreg.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-appointments',
  templateUrl: './appointments.component.html',
  styleUrls: ['./appointments.component.scss'],
})
export class AppointmentsComponent implements OnInit {

  departmentList: Department[] = [];
  doctors: Doctor[] = [];
  selectedDepartmentId: number = 0;
  consultationFee: number = 0; 
selectedDoctorId: any;
  
  constructor(
    public patientregService: PatientregService,
    private fb: FormBuilder,
    private http: HttpClient
  ) {}

  ngOnInit(): void {
    this.patientregService.getAllDepartments();
  }
  // onDepartmentChange(): void {
  //   const departmentId = this.patientregService.formAppointmentData.DepartmentId;
  
  //   if (departmentId) {
  //     this.patientregService.getDoctorsByDepartmentId(departmentId).subscribe(
  //       (data: Doctor[]): void => {
  //         this.doctors = data;
  //         console.log('Doctors fetched successfully:', this.doctors);
  //       },
  //   () => {
  //         console.error('Error fetching doctors:', error.message || error);
  //       }
  //     );
  //   } else {
  //     console.warn('No department selected.');
  //   }
  // }

  onDepartmentChange(event: Event): void {
    console.log('onDepartmentChange: start');
    const target = event.target as HTMLSelectElement; 
    const selectedDepartmentId = Number(target.value); // Convert the value to a number
    console.log('onDepartmentChange: mid:'+selectedDepartmentId);
    
    if (selectedDepartmentId) {
      this.patientregService.getDoctorsByDepartmentId(selectedDepartmentId).subscribe(
        (data: Doctor[]) => {
          this.doctors = data; // Assign fetched data to the `doctors` property
          console.log('Doctors fetched successfully:', this.doctors);
        },
        (error: any) => {
          console.error('Error fetching doctors:', error.message || error);
        }
      );
    } else {
      console.warn('No department selected.');
    }
  }
  
  

  onDoctorChange(doctorId: number): void {
    this.patientregService.getConsultationFeeByDoctorId(doctorId)
      .then((fee) => {
        this.consultationFee = fee;
        console.log('Consultation Fee:', this.consultationFee);
      })
      .catch((error) => {
        console.error('Error fetching consultation fee:', error);
      });
  }

  // bookAppointment() {
  //   const appointmentData = this.appointmentForm.value;
  //   this.http.post('/api/Appointment/SaveAppointment', appointmentData).subscribe((response) => {
  //     console.log('Appointment booked successfully', response);
  //     alert('Appointment booked successfully!');
  //   });
  // }
}
