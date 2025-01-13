import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Appointment } from 'src/app/shared/model/appointment.model';
import { AppointmentService } from 'src/app/shared/service/appointment.service';
import { PatientHistoryService } from 'src/app/shared/service/patient-history.service';
import { PatientregService } from 'src/app/shared/service/patientreg.service';

@Component({
  selector: 'app-list-doctors',
  templateUrl: './list-doctors.component.html',
  styleUrls: ['./list-doctors.component.scss']
})
export class ListDoctorsComponent implements OnInit {
 //declare variables
 page: number=1;
 pageSize: number= 3 ;
 searchTerm: string='';
 patients: any[] = [];
 doctorId!: number;

 appointments: Appointment[] = [];  // List of appointments
 filteredAppointmentsList: Appointment[] = [];  // Filtered list for display
  constructor(
    public appointmentService: AppointmentService , 
    private patientHistoryService: PatientHistoryService,
    private patientregService: PatientregService,
    private router: Router, 
    private route: ActivatedRoute,
    private toastr : ToastrService) { }

 
  //Life Cycle hook
  ngOnInit(): void {
    // Get doctor ID from route parameters
    const docId = Number(this.route.snapshot.paramMap.get('docId'));
    console.log('Doctor ID:', docId);
    if (docId) {
      // Fetch appointments for the doctor
      this.appointmentService.getTodaysAppointments(docId).subscribe(
        (response:any) => {
          this.appointmentService.appointments = response;
          this.fetchPatients();
          console.log(this.appointments);
        },
        (error:any) => {
          console.error('Error fetching appointments:', error);
        }
      );
    }
  }
   // Search Method for Appointments
filteredAppointments() {
  if (!this.searchTerm) {
    return this.appointmentService.appointments;  // Assuming you have appointment data stored in the service
  }

  const searchTermLower = this.searchTerm.toLowerCase();

  // Return filtered appointment list based on the search term
  return this.appointmentService.appointments.filter((d: Appointment)  => {
    
    const drCode = `DR${d.AppointmentId}`.toLowerCase();
    return (
      d.PatientName.toLowerCase().includes(searchTermLower) ||
      d.AppointmentId.toString().toLowerCase().includes(searchTermLower) ||
      d.PhoneNumber.toLowerCase().includes(searchTermLower) ||
      d.DepartmentName.toLowerCase().includes(searchTermLower) ||
      drCode.includes(searchTermLower)
    );
  });
}

fetchPatientHistory(): void {
  this.patientHistoryService.getPatientHistoryByDoctor(this.doctorId).subscribe(
    (data) => {
      this.patients = data;
    },
    (error) => {
      console.error('Error fetching patient history:', error);
    }
  );
}


async fetchPatients(): Promise<void> {
  try {
    const patients = await this.patientregService.getAllPatients();
    this.patients = patients;
    console.log('Patients:', this.patients);
  } catch (error) {
    console.error('Error fetching patients:', error);
  }
}

// Go back to the appointment list
goBack() {
  this.router.navigate(['/doctors/add'])
  console.log('Redirecting to StartConsulation');
}




// viewpatienthistory(patientId: number): void {
//   this.router.navigate(['/doctors/PatientHistory', patientId]);
//   console.log('Redirecting to PatientHistory with ID:', patientId);
// }



getPatientId(patientName: string): number {
  const patient = this.patients.find(p => p.PatientName === patientName);
  return patient ? patient.PatientId : null;  // Return the PatientId or null if not found
}

// Method to handle the button click
// viewPatientHistory(patientName: string): void {
//   const patientId = this.getPatientId(patientName);
//   if (patientId) {
//     this.router.navigate(['/doctors/PatientHistory', { patientId }]);
//     console.log('Redirecting to Patient History for PatientId:', patientId);
//   } else {
//     console.error('Patient not found!');
//   }
// }

viewPatientHistory(patientName: string): void {
  const patientId = this.getPatientId(patientName);  // This function should return the PatientId based on the name
  if (patientId) {
    this.router.navigate(['/doctors/PatientHistory', patientId]);  // Pass the patientId directly as a parameter
    console.log('Redirecting to Patient History for PatientId:', patientId);
  } else {
    console.error('Patient not found!');
  }
}

viewlabtesthistory(appointmentId: number): void {
  this.router.navigate(['/doctors/DoctorLabTest', appointmentId]);  // Pass the AppointmentId as a route parameter
  console.log('Redirecting to DoctorLabTest with AppointmentId:', appointmentId);
}


}
