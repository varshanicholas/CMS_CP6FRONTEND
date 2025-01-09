import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DoctorAddComponent } from './doctor-add/doctor-add.component';
import { ListDoctorsComponent } from './list-doctors/list-doctors.component';

const routes: Routes = [

  // { path: 'appointments-today', component: DoctorAppointmentsTodayComponent },
  // { path: 'appoint', component: DoctorListComponent },
  { path: 'list/:docId', component: ListDoctorsComponent },
  { path: 'add', component: DoctorAddComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DoctorsRoutingModule { }
