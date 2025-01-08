import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Patient } from 'src/app/shared/model/patient';
import { PatientregService } from 'src/app/shared/service/patientreg.service';
import {  Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-patient-search',
  templateUrl: './patient-search.component.html',
  styleUrls: ['./patient-search.component.scss']
})
export class PatientSearchComponent implements OnInit {
  searchType: string = '';
  searchQuery: string = ''; // Holds the search query
  patientData: Patient[] = []; // Array to hold the search results
  noData : boolean = false;

  constructor(private route: ActivatedRoute, private patientService : PatientregService,
    private router:Router,private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.searchType = params['searchType']; // 'phone' or 'regnum'
    });
    
  }

  // Simulate search logic
  async onSearch(): Promise<void> {
    if (this.searchQuery) {

      this.patientData = await (await this.patientService.getAllPatients()).filter (patient => 
        this.searchType === 'phone' ? patient.PhoneNumber.includes(this.searchQuery) 
        : this.searchType === 'regnum' ?('PT0'+ patient.PatientId.toString()).includes(this.searchQuery)
        : false);

      this.noData = this.patientData.length==0;
    }
  }


  //edit patient


editPatient(patient: Patient): void {
  this.populatePatientData(patient); 
  this.router.navigate(['/receptionist/patientreg-edit', patient.PatientId]); 
}

//getting employee for populate the data

populatePatientData(patient :Patient){
  console.log("Inside populate method");
    console.log(patient);
    //transform date format as yyyy-MM-dd

    var datePipe=new DatePipe("en-UK");

    let formattedDate :any=datePipe.transform(patient.Dob,'yyyy-MM-dd');
    patient.Dob=formattedDate;

    this.patientService.formPatientData={...patient}

}

}
