import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DoctorAddComponent } from './doctor-add/doctor-add.component';
import { DoctorsComponent } from './doctors.component';
import { PatientHistoryComponent } from '../PatientHistory/patient-history/patient-history.component';
import { DoctorLabTestListComponent } from '../DoctorLabTesr/doctor-lab-test-list/doctor-lab-test-list.component';
import { ListDoctorsComponent } from './list-doctors/list-doctors.component';
import { DoctorsComponent } from './doctors.component';


const routes: Routes = [



   { path: 'list/:docId', component: ListDoctorsComponent },
  // { path: 'docdash', component: DoctorsComponent },
  // { path: 'list', component: ListDoctorsComponent },
  { path: 'add', component: DoctorAddComponent },
  { path: 'PatientHistory/:patientId', component: PatientHistoryComponent },
  { path: 'DoctorLabTest/:appointmentId', component: DoctorLabTestListComponent }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DoctorsRoutingModule { }
