import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DoctorLabTestViewModel } from 'src/app/shared/model/doctor-lab-test-view-model';
import { DoctorLabTestService } from 'src/app/shared/service/doctor-lab-test.service';

@Component({
  selector: 'app-doctor-lab-test-list',
  templateUrl: './doctor-lab-test-list.component.html',
  styleUrls: ['./doctor-lab-test-list.component.scss']
})
export class DoctorLabTestListComponent implements OnInit {
  appointmentId!: number;
  labTestReports: DoctorLabTestViewModel[] = [];

  constructor(
    private labTestService: DoctorLabTestService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    // Get appointment ID from route parameters
    this.appointmentId = Number(this.route.snapshot.paramMap.get('appointmentId'));
    console.log('Appointment ID:', this.appointmentId);

    if (this.appointmentId) {
      this.labTestService.getLabTestReports(this.appointmentId).subscribe(
        (response: DoctorLabTestViewModel[]) => {
          this.labTestReports = response;
          console.log('Lab Test Reports:', this.labTestReports);
        },
        (error) => {
          console.error('Error fetching lab test reports:', error);
        }
      );
    }
  }

  // Go back to the appointment list
  goBack() {
    this.router.navigate(['/doctors/list/:docId'])
    console.log('Redirecting to appointment list');
  }
}
