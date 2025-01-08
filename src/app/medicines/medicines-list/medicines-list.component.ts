import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
// import { ToastrService } from 'ngx-toastr';
// import { Medicine } from 'src/app/shared/model/medicine';---------
import { MedicinesService } from 'src/app/shared/service/medicines.service';
import { DatePipe } from '@angular/common';
import { Medicine } from 'src/app/shared/model/medicines';

@Component({
  selector: 'app-medicines-list',
  templateUrl: './medicines-list.component.html',
  styleUrls: ['./medicines-list.component.scss'],
})
export class MedicinesListComponent implements OnInit {
  // Declare variables
  page: number = 1;
  pageSize: number = 5;
  searchTerm: string = '';

  constructor(
    public medicinesService: MedicinesService,
    private router: Router,
    // private toastr: ToastrService
  ) {}

  // Life-cycle hook
  ngOnInit(): void {
    console.log("Hi! I'm Medicines List Component");
    this.medicinesService.getAllMedicines();
  }

  // Filtered Medicines based on search term
  filteredMedicines() {
    if (!this.searchTerm) {
      return this.medicinesService.medicines;
    }

    const searchTermLower = this.searchTerm.toLowerCase();

    return this.medicinesService.medicines.filter((m) =>
      m.Name?.toLowerCase().includes(searchTermLower)
    );
  }

  // Edit Medicine
  editMedicine(medicine: Medicine): void {
    console.log(medicine);

    // Populate Medicine Data
    this.populateMedicineData(medicine);

    // Navigate to edit component
    this.router.navigate(['/medicines/edit/' + medicine.MedicineId]);
  }

  // Populate Medicine Data
  populateMedicineData(medicine: Medicine) {
    console.log('Inside populate method');
    console.log(medicine);

    // Transform date format as yyyy-MM-dd
    const datePipe = new DatePipe('en-UK');
    const formattedDate: any = datePipe.transform(medicine.ExpiryDate, 'yyyy-MM-dd');
    medicine.ExpiryDate = formattedDate;

    this.medicinesService.formMedicineData = { ...medicine }; // Spread operator
  }

  // Delete Medicine
  deleteMedicine(medicine: Medicine) {
    // Confirmation
    if (confirm('Are you sure to DELETE this record?')) {
      // Simulating deletion, setting IsActive = false
      medicine.IsActive = false;

      this.medicinesService.updateMedicine(medicine).subscribe(
        (response) => {
          console.log(response);
          // this.toastr.success('Medicine has been deleted successfully', 'Medicine Manager');
          this.medicinesService.getAllMedicines();
        },
        (error) => {
          console.log(error);
          // this.toastr.error('Something went wrong! Try again...', 'Medicine Manager');
        }
      );
    }
  }
}
