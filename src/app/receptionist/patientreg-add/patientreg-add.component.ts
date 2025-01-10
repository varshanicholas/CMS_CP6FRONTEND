import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { PatientregService } from 'src/app/shared/service/patientreg.service';

@Component({
  selector: 'app-patientreg-add',
  templateUrl: './patientreg-add.component.html',
  styleUrls: ['./patientreg-add.component.scss'],
})
export class PatientregAddComponent implements OnInit {
  currentDate: string = new Date().toISOString().split('T')[0];
  errorMessage: string | null = null;

  constructor(
    public patientregService: PatientregService,
    private router: Router,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {}

  onSubmit(patForm: NgForm) {
    console.log('Form Values Submitted:', patForm.value);

    this.addPatient(patForm);
    patForm.reset();
  }

  // addPatient(patForm: NgForm) {
  //   console.log('Inserting Patient...');
  //   this.patientregService.insertPatient(patForm.value).subscribe(
  //     (response) => {
  //       console.log('Response from Server:', response);
  //       this.toastr.success('Successfully Registered');
  //       console.log('registered');
  //       this.errorMessage = null;

  //       // Refresh the patients list
  //      // this.patientregService.getAllPatients();
  //      console.log('Navigating to appointments page...');
  //       this.router.navigate(['/receptionist/appointments']);
  //     },
  //     (error) => {
  //       console.error('Error Occurred:', error);
  //       this.toastr.error('An error occurred. Please try again.');
  //       this.errorMessage = 'An Error Occurred: ' + error.message;
  //     }
  //   );
  // }

  addPatient(patForm: NgForm) {
    console.log('Inserting Patient...');
    this.patientregService.insertPatient(patForm.value).subscribe(
      (response) => {
        console.log('Response from Server:', response);
        this.toastr.success('Successfully Registered');
        this.errorMessage = null;
  
        const patientId = response.Value.PatientId; // Assuming the server returns the patient ID
        const patientName = response.Value.PatientName; // Assuming the server returns the patient name
        //console.log(response.PatientId);
        console.log(response.Value.PatientId);


        console.log('Navigating to appointments page with patient data...');
        this.router.navigate(['/receptionist/appointments'], {
          queryParams: { id: patientId, name: patientName },
        });
      },
      (error) => {
        console.error('Error Occurred:', error);
        this.toastr.error('An error occurred. Please try again.');
        this.errorMessage = 'An Error Occurred: ' + error.message;
      }
    );
  }
  
}
