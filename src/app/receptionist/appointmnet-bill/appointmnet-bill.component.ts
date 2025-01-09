import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Department } from 'src/app/shared/model/department';
import { Doctor } from 'src/app/shared/model/doctor';
import { PatientregService } from 'src/app/shared/service/patientreg.service';

@Component({
  selector: 'app-appointmnet-bill',
  templateUrl: './appointmnet-bill.component.html',
  styleUrls: ['./appointmnet-bill.component.scss']
})
export class AppointmnetBillComponent implements OnInit {
    departmentList: Department[] = [];
    doctors: Doctor[] = [];
    selectedDepartmentId: number = 0;
    consultationFee: number = 0; 
  selectedDoctorId: any;
registrationFee:number = 0; 
totalAmount: number = 0; 

  constructor( public patientregService: PatientregService,
      private fb: FormBuilder,
      private http: HttpClient) { }

  ngOnInit(): void {
  }

}
