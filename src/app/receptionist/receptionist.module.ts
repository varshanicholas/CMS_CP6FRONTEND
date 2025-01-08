import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReceptionistRoutingModule } from './receptionist-routing.module';
import { ReceptionistComponent } from './receptionist.component';
import { PatientregAddComponent } from './patientreg-add/patientreg-add.component';
import { PatientregListComponent } from './patientreg-list/patientreg-list.component';
import { PatientregEditComponent } from './patientreg-edit/patientreg-edit.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { PatientSearchComponent } from './patient-search/patient-search.component';
import { AppointmentsComponent } from './appointments/appointments.component';
import { BrowserModule } from '@angular/platform-browser';
import { PatientregService } from '../shared/service/patientreg.service';
const routes: Routes = [
  {
    path: '',
    component: ReceptionistComponent, // Default route for receptionist dashboard
  },
  {
    path: 'patient-reg-add',
    component: PatientregAddComponent, // Route for adding patient
  },
  {
    path: 'patient-reg-edit',
    component: PatientregEditComponent, // Route for editing patient
  },
  {
    path: 'patient-reg-list',
    component: PatientregListComponent, // Route for viewing patient list
  },
  {
    path: 'patient-search',
    component: PatientSearchComponent
  },
  {
    path: 'appointments',
    component: AppointmentsComponent
  }
];


@NgModule({
  declarations: [
    ReceptionistComponent,
    PatientregAddComponent,
    PatientregListComponent,
    PatientregEditComponent,
    PatientSearchComponent,
    AppointmentsComponent
    ],
  imports: [
    CommonModule,
    FormsModule,
    ReceptionistRoutingModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ],
  providers: [
    PatientregService
  ]
})
export class ReceptionistModule { }
