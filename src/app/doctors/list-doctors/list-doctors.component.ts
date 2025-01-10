<<<<<<< HEAD
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Appointment } from 'src/app/shared/model/appointment.model';
import { AppointmentService } from 'src/app/shared/service/appointment.service';

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
=======
// import { Component, OnInit } from '@angular/core';
// import { ActivatedRoute, Router } from '@angular/router';
// import { ToastrService } from 'ngx-toastr';
// import { Appointment } from 'src/app/shared/model/appointment.model';

>>>>>>> 0d007009698a20ba156b8eb72fb1e8b4ddc0a5e0

// @Component({
//   selector: 'app-list-doctors',
//   templateUrl: './list-doctors.component.html',
//   styleUrls: ['./list-doctors.component.scss']
// })
// export class ListDoctorsComponent implements OnInit {
//  //declare variables
//  page: number=1;
//  pageSize: number= 7;
//  searchTerm: string='';

//  appointments: Appointment[] = [];  // List of appointments
//  filteredAppointmentsList: Appointment[] = [];  // Filtered list for display
//   constructor(

//     private router: Router, 
//     private route: ActivatedRoute,
//     private toastr : ToastrService) { }

 
<<<<<<< HEAD
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
=======
//   //Life Cycle hook
//   ngOnInit(): void {
//     // Get doctor ID from route parameters
//     const docId = Number(this.route.snapshot.paramMap.get('docId'));

//     if (docId) {
//       // Fetch appointments for the doctor
//       this.appointmentService.getTodaysAppointments(docId).subscribe(
//         (response:any) => {
//           this.appointments = response;
//           console.log(this.appointments);
//         },
//         (error:any) => {
//           console.error('Error fetching appointments:', error);
//         }
//       );
//     }
//   }
//    // Search Method for Appointments
// filteredAppointments() {
//   if (!this.searchTerm) {
//     return this.appointmentService.appointments;  // Assuming you have appointment data stored in the service
//   }
>>>>>>> 0d007009698a20ba156b8eb72fb1e8b4ddc0a5e0

//   const searchTermLower = this.searchTerm.toLowerCase();

//   // Return filtered appointment list based on the search term
//   return this.appointmentService.appointments.filter((d: Appointment)  => {
    
//     const drCode = `DR${d.AppointmentId}`.toLowerCase();
//     return (
//       d.PatientName.toLowerCase().includes(searchTermLower) ||
//       d.AppointmentId.toString().toLowerCase().includes(searchTermLower) ||
//       d.PhoneNumber.toLowerCase().includes(searchTermLower) ||
//       d.DepartmentName.toLowerCase().includes(searchTermLower) ||
//       drCode.includes(searchTermLower)
//     );
//   });
// }

<<<<<<< HEAD
// Go back to the appointment list
goBack() {
  this.router.navigate(['/doctors/add'])
  console.log('Redirecting to StartConsulation');
}

}
=======
// }
>>>>>>> 0d007009698a20ba156b8eb72fb1e8b4ddc0a5e0
