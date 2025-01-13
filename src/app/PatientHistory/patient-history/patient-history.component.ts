import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PatientHistory } from 'src/app/shared/model/patient-history';
import { PatientHistoryService } from 'src/app/shared/service/patient-history.service';

@Component({
  selector: 'app-patient-history',
  templateUrl: './patient-history.component.html',
  styleUrls: ['./patient-history.component.scss']
})
export class PatientHistoryComponent implements OnInit {
  patientHistories: PatientHistory[] = [];
  selectedPatientHistory?: PatientHistory;
  doctorId!: number;
  showDetails: boolean = false;
  patientId!: number;

  constructor(
    private patientHistoryService: PatientHistoryService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.doctorId = Number(this.route.snapshot.paramMap.get('docId'));
    if (this.doctorId) {
      this.patientHistoryService.getPatientHistoryByDoctor(this.doctorId).subscribe(
        (response) => {
          this.patientHistories = response;
          console.log('Patient Histories:', this.patientHistories);
        },
        (error) => {
          console.error('Error fetching patient histories:', error);
        }
      );
    }

    this.patientId = Number(this.route.snapshot.paramMap.get('patientId'));

    if (this.patientId) {
      this.getPatientHistory();
    } else {
      console.error('Patient ID not found in route.');
    }
  }

  viewDetails(patientId: number): void {
    this.patientHistoryService.getPatientHistoryByDoctor(patientId).subscribe(
      (response: any) => {
        this.selectedPatientHistory = response;
        this.showDetails = true;
        console.log('Detailed Patient History:', this.selectedPatientHistory);
      },
      (error) => {
        console.error('Error fetching detailed patient history:', error);
      }
    );
  }


  getPatientHistory(): void {
    this.patientHistoryService.getPatientHistory(this.patientId).subscribe(
      (response: PatientHistory[]) => {
        this.patientHistories = response;
        console.log('Patient Histories:', this.patientHistories);
      },
      (error) => {
        console.error('Error fetching patient histories:', error);
      }
    );
  }

  // Go back to today's appointments
  backToAppointments(): void {
    this.showDetails = true;
  }

 // Go back to the appointment list
 redirection() {
  this.router.navigate(['/doctors/list/:docId'])
  console.log('Redirecting to appointment list');
}
}
