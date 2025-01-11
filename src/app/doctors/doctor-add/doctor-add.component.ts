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
  symptoms: string = ''; 
  symptomsList: string[] = [];
  diagnosis: string = '';
  diagnosisList: string[] = [];
  doctorNotes: string = '';
  doctorNotesList: string[] = [];
  // medicines: any[] = []; 
  medicines: any[] = [{}];
  medicinesList: any[]=[];
  // labTests: any[] = [];
  labTests: any[] = [{}]; 
  labTestsList: any[]=[];

  errorMessage: string | null = null;

  constructor(public appointmentService: AppointmentService,
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
    this.appointmentService.insertStartConsultation(drform.value).subscribe(
      (response:any) => {
        console.log(response);
        this.toastr.success('Consultation record has been inserted successfully',
          'CMS v2024')

        //Insert successful, clear error message
        this.errorMessage = null;

        //Redirect to appointment List
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
  // Add Symptom 
  addSymptom()
   { 
    if (this.symptoms.trim()) 
      {
         this.symptomsList.push(this.symptoms);
          this.symptoms = '';
      }
    }
     // Add Medicine
      addMedicine()
       
      {
         this.medicines.push(
          {
             CategoryName: '',
              MedicineName: '',
              Dosage: '', 
              Frequency: '',
              Quantity: '' 
          });
      }

       // Add Diagnosis
      addDiagnosis() {
        if (this.diagnosis.trim()) {
          this.diagnosisList.push(this.diagnosis);
          this.diagnosis = '';
        }
      }

      // Add Doctor Notes
      addDoctorNotes() {
        if (this.doctorNotes.trim()) {
          this.doctorNotesList.push(this.doctorNotes);
          this.doctorNotes = '';
        }
      }
      //Add Lab Test 
      addLabTest()
       {
         this.labTests.push(
          {
             LabTestName: '',
              CategoryName: '' 
          });
        }
      // Remove a medicine by index
    //   removeMedicine(index: number): void {
    //     this.medicines.splice(index, 1);
    //   }

    //   // Remove a lab test by index
    //   removeLabTest(index: number): void {
    //     this.labTests.splice(index, 1);
    // }

   /* // Save medicine and push to list
    saveMedicine() {
    if (this.medicines && this.medicines.length > 0) {
      this.medicinesList.push(...this.medicines);
      // this.medicines = [{ CategoryName: '', MedicineName: '', Dosage: '', Frequency: '', Quantity: '' }];
      this.medicines = [{}]; 
    } else {
      this.errorMessage = 'Please add medicine details';
    }
  }

    // Save lab test and push to list
    saveLabTest() {
      if (this.labTests && this.labTests.length > 0) {
      this.labTestsList.push(...this.labTests);
      // this.labTests = [{ LabTestName: '', CategoryName: '' }];
      this.labTests = [{}];
    } else {
      this.errorMessage = 'Please add lab test details';
    }
  }*/

    saveMedicine() {
      this.medicinesList.push(...this.medicines);
      this.medicines = [];
    }

    saveLabTest() {
      this.labTestsList.push(...this.labTests);
      this.labTests = [];
    }


  

  // Go back to the appointment list
  goBack() {
    this.router.navigate(['/doctors/list/:docId'])
    console.log('Redirecting to Today\'s Appointment List');
  }

}



