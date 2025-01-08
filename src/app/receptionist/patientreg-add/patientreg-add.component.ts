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

  addPatient(patForm: NgForm) {
    console.log('Inserting Patient...');
    this.patientregService.insertPatient(patForm.value).subscribe(
      (response) => {
        console.log('Response from Server:', response);
        this.toastr.success('Successfully Registered');
        this.errorMessage = null;

        // Refresh the patients list
       // this.patientregService.getAllPatients();
        this.router.navigate(['/receptionist/appointments']);
      },
      (error) => {
        console.error('Error Occurred:', error);
        this.toastr.error('An error occurred. Please try again.');
        this.errorMessage = 'An Error Occurred: ' + error.message;
      }
    );
  }
}
