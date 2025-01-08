import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-receptionist',
  templateUrl: './receptionist.component.html',
  styleUrls: ['./receptionist.component.scss'],
})
export class ReceptionistComponent implements OnInit {
  isPatientSearchPopupVisible: any = false;

  constructor(private router: Router) {}

  ngOnInit(): void {}

  navigateTo(path: string) {
    this.router.navigate([path]);
  }

  navigateToPatientSearch(searchType: string) {
    this.isPatientSearchPopupVisible = false;

    this.router.navigate(['receptionist/patient-search'], { queryParams: { searchType: searchType } });
  }

  closePopup() {
    this.isPatientSearchPopupVisible = false;
  }

  togglePopup() {
    this.isPatientSearchPopupVisible = !this.isPatientSearchPopupVisible;
  }
}
