import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AppointmentService } from 'src/app/shared/service/appointment.service';

@Component({
  selector: 'app-doctor-add',
  templateUrl: './doctor-add.component.html',
  styleUrls: ['./doctor-add.component.scss']
})
export class DoctorAddComponent implements OnInit {

  //declare variable
  
  errorMessage: string | null = null;

  constructor(public appoinmentService: AppointmentService,
    private router: Router, 
    private toastr: ToastrService
  ) { }

   //Life-cycle
   ngOnInit(): void {  }
  //Submit Form
  onSubmit(drform: NgForm) {
    console.log(drform.value);

    //call Insert  Method
    this.addConsultation(drform);

    //Redirect to Employee List
    this.router.navigate(['/doctors/list'])

    //Reset form
    drform.reset();

  }

  //Insert Method
  addConsultation(drform: NgForm) {
    console.log("inserting...")
    this.appoinmentService.insertStartConsultation(drform.value).subscribe(
      (response:any) => {
        console.log(response);
        this.toastr.success('Consultation record has been inserted successfully',
          'CMS v2024')

        //Insert successful, clear error message
        this.errorMessage = null;

        // //Refresh the list and navigate to the employee list page
        // this.appoinmentService.getAllPatients();

        //Redirect to Employee List
        this.router.navigate(['/doctors/list'])

        //Reset form
        drform.reset();
      },
      (error:any) => {
        console.log(error);
        this.toastr.error('An error occured !.. try again..', 'CMS v2024')
        this.errorMessage = 'An error occured' + error;
      }
    );
  }
}



