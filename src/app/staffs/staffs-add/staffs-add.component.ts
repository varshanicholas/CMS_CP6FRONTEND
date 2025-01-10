import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { StaffService } from 'src/app/shared/service/staff.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-employees-add',
  templateUrl: './staffs-add.component.html',
  styleUrls: ['./staffs-add.component.scss']
})
export class StaffsAddComponent implements OnInit { // Correct


  //declare variable
  errorMessage: string | null = null;

  constructor(public staffService: StaffService,
    private router: Router, private toastr: ToastrService
  ) { }
  //Life-cycle
  ngOnInit(): void {
    this.staffService.getAllDepartments();
  }
  //Submit Form
  onSubmit(empform: NgForm) {
    console.log(empform.value);

    //call Insert  Method
    this.addStaff(empform);

    //Redirect to Employee List
    this.router.navigate(['/staffs/list'])

    //Reset form
    empform.reset();

  }

  //Insert Method
  addStaff(empform: NgForm) {
    console.log("inserting...")
    this.staffService.InsertPostStaff(empform.value).subscribe(
      (response) => {
        console.log(response);
        this.toastr.success('Record has been inserted successfully','EMS v2024')

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

}
