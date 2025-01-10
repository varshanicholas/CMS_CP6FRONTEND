import { Component, OnInit } from '@angular/core';
import { PatientregService } from 'src/app/shared/service/patientreg.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-patientreg-edit',
  templateUrl: './patientreg-edit.component.html',
  styleUrls: ['./patientreg-edit.component.scss']
})
export class PatientregEditComponent implements OnInit {

  //declare variables
  errorMessage:string | null=null;

  constructor(public patientregService:PatientregService,private router:Router,private toastr: ToastrService,private route: ActivatedRoute) { }

  ngOnInit(): void {
    
  }

    //SubmitForm
  
    onSubmit(patForm: NgForm){
      console.log(patForm.value);
    
  //call the insert method
  
  this.updatePatient(patForm);
    }

//Insert Method
updatePatient(patForm: NgForm): void {
  console.log("Updating...");
  this.patientregService.updatePatient(patForm.value).subscribe(
    (response) => {
      console.log(response);
      this.toastr.success('Patient updated successfully');
      this.errorMessage = null;

      // Refresh the patient list
      this.patientregService.getAllPatients();

      // Navigate back to the patient list or details page
      this.router.navigate(['/receptionist/list']); // Redirect to the patient list after update
      patForm.reset();
    },
    (error) => {
      console.log(error);
      this.toastr.error('An error occurred. Please try again.');
      this.errorMessage = 'An error occurred: ' + error;
    }
  );
}


}