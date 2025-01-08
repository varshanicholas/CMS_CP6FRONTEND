import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Patient } from 'src/app/shared/model/patient';
import { PatientregService } from 'src/app/shared/service/patientreg.service';



@Component({
  selector: 'app-patientreg-list',
  templateUrl: './patientreg-list.component.html',
  styleUrls: ['./patientreg-list.component.scss']
})
export class PatientregListComponent implements OnInit {

//declare variables

page:number=1;
pageSixe:number=10;
searchTerm:string='';

  constructor(public patientregService:PatientregService,private toastr: ToastrService,
    private router:Router
  ) { }

  ngOnInit(): void {
    console.log("Hi i am PatientReg List component");
    this.patientregService.getAllPatients();
  }



//edit patient

editPatient(patient:Patient):void{
  console.log(patient);

  //call populate patient
this.populatePatientData(patient);


this.router.navigate(['/receptionist/edit/'+patient.PatientId]);


}
//getting patient for populate the data

populatePatientData(patient:Patient){
  console.log("Inside populate method");
    console.log(patient);
    //transform date format as yyyy-MM-dd

    var datePipe=new DatePipe("en-UK");

    let formattedDate :any=datePipe.transform(patient.Dob,'yyyy-MM-dd');
    patient.Dob=formattedDate;

    this.patientregService.formPatientData={...patient}

}

// deletePatient(patient:Patient) {
//   // Confirmation
//   if (confirm('Are you sure to delete this record?')) {
//     // As if deletion, set isActive=false
//     patient.IsActive = false;

//     this.employeeService.updateEmployee(employee)
//       .subscribe(
//         (response) => {
//           console.log(response);
//           this.toastr.success('Deleted successfully');
//           this.employeeService.getAllEmployees();
//         },
//         (error) => {
//           console.log(error);
//           this.toastr.error('An error occurred, try again...');
//         }
//       );
//   }
// }

  }
