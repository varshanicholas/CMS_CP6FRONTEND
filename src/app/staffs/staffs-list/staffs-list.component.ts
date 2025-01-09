import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Staff } from 'src/app/shared/model/staff';
import { StaffService } from 'src/app/shared/service/staff.service';

@Component({
  selector: 'app-staffs-list',
  templateUrl: './staffs-list.component.html',
  styleUrls: ['./staffs-list.component.scss']
})
export class StaffsListComponent implements OnInit {
  searchTerm: string = ''; // Define and initialize searchTerm
  pageSize: number = 10; // Define and set a default value for pageSize
  page: number = 1; // Define and set the initial page number

  constructor(public staffService: StaffService, private router: Router, private toastr: ToastrService) { }
  ngOnInit(): void {
    console.log("staff list component");
    this.staffService.getAllStaffs();
  }

  // No-Operation method to handle empty click events
  noop(): void {}

  // Search Method
  filteredStaffs() {
    if (!this.searchTerm) {
      return this.staffService.staffs;
    }

    const searchTermLower = this.searchTerm.toLowerCase();

    return this.staffService.staffs.filter(s => {
      const staffCode = `em${s.StaffId}`.toLowerCase();

      return (
        s.PhoneNumber?.toLowerCase().includes(searchTermLower) ||
        staffCode.includes(searchTermLower)
      );
    });
  }

  // Edit Staff
  updatePutStaff(staff: Staff): void {
    console.log(staff);
    this.populateStaffData(staff);
    this.router.navigate(['/staffs/edit/' + staff.StaffId]);
  }

  populateStaffData(staff: Staff) {
    console.log("Inside populate method");
    console.log(staff);
  
    const datePipe = new DatePipe("en-UK");
  
    // Transform DOB to a string in 'yyyy-MM-dd' format
    const formattedDOB = datePipe.transform(staff.Dob, 'yyyy-MM-dd');
    staff.Dob = formattedDOB ? new Date(formattedDOB) : new Date(); // Ensure it's a Date type
  
    // Transform CreatedDate to a string in 'yyyy-MM-dd' format
    const formattedCreatedDate = datePipe.transform(staff.CreatedDate, 'yyyy-MM-dd');
    staff.CreatedDate = formattedCreatedDate ? new Date(formattedCreatedDate) : new Date();
  
    this.staffService.formStaffData = { ...staff };
  }
  deleteStaff(staff: Staff) {
    //confirmation
    if(confirm("Are you sure to DELETE this record?")) {

      //asif deletion, set IsActive = false
      staff.IsActive = false;

      this.staffService.updatePutStaff(staff).subscribe(response => {
        console.log(response);
        this.toastr.success('staff has been deleted successfully', 'CMS_FrontEndNg');
        this.staffService.getAllStaffs();
      },
    (error) => {
      console.log(error)
      this.toastr.error('Something wrong! try again...', 'CMS_FrontEndNg');
    });
  }
}
}