// import { Component, OnInit } from '@angular/core';

// import { NgForm } from '@angular/forms';
// import { Router } from '@angular/router';
// import { ToastrService } from 'ngx-toastr';
// import { MedicineService } from 'src/app/shared/service/medicines.service';

// @Component({
//   selector: 'app-medicines-add',
//   templateUrl: './medicines-add.component.html',
//   styleUrls: ['./medicines-add.component.scss']
// })
// export class MedicinesAddComponent implements OnInit {
//   // Declare variable for error message
//   errorMessage: string | null = null;

//   constructor(
//     public medicinesService: MedicineService,
//     private router: Router,
//     private toastr: ToastrService
//   ) {}

//   // Life-cycle hook
//   ngOnInit(): void {
//     // Any required initialization
//   }

//   // Handle form submission
//   onSubmit(medForm: NgForm): void {
//     console.log(medForm.value);

//     // Call the service to add the medicine
//     this.addMedicine(medForm);

//     // Redirect to the medicines list
//     this.router.navigate(['/medicines/list']);

//     // Reset the form
//     medForm.reset();
//   }

//   // Add medicine using the service
//   addMedicine(medForm: NgForm): void {
//     console.log('Adding new medicine...');
//     this.medicinesService.insertMedicine(medForm.value).subscribe(
//       (response) => {
//         console.log(response);
//         this.toastr.success('Medicine added successfully!', 'Medicine Manager');
//         this.errorMessage = null; // Clear any previous errors


        // Refresh the medicines list
        this.medicinesService.getAllMedicines();

        // Redirect to the list view
        this.router.navigate(['/medicines/list']);
      },
      (error) => {
        console.error(error);
        this.toastr.error('Failed to add medicine. Try again.', 'Medicine Manager');
        this.errorMessage = 'An error occurred: ' + error.message;
      }
    );
  }
}



// }
