import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { StaffService } from 'src/app/shared/service/staff.service';

@Component({
  selector: 'app-staffs-edit',
  templateUrl: './staffs-edit.component.html',
  styleUrls: ['./staffs-edit.component.scss']
})
export class StaffsEditComponent implements OnInit { // Correct

  //declare variable
  errorMessage: string | null = null;

  constructor(public staffService: StaffService,
    private router: Router, private toastr: ToastrService
  ) { }

  //Submit Form
  onSubmit(empform: NgForm) {
    console.log(empform.value);

    //call Insert  Method
    this.updatePutStaff(empform);

    //Redirect to Employee List
    this.router.navigate(['/staffs/list'])

    //Reset form
    empform.reset();

  }

   //Update method
   updatePutStaff(empform: NgForm) {
    console.log("updating...")
    this.staffService.updatePutStaff(empform.value).subscribe(
      (response) => {
        console.log(response);
        this.toastr.success('Record has been updated successfully', 'EMS v2024')

        //Insert successful, clear error message
        this.errorMessage = null;

        //Refresh the list and navigate to the employee list page
        this.staffService.getAllStaffs();

        //Redirect to Employee List
        this.router.navigate(['/staffs/list'])

        //Reset form
        empform.reset();
      },
      (error) => {
        console.log(error);
        this.toastr.error('An error occured !.. try again..', 'EMS v2024')
        this.errorMessage = 'An error occured' + error;
      }
    )
  };

  ngOnInit(): void {
    this.staffService.getAllDepartments();
  }

}


