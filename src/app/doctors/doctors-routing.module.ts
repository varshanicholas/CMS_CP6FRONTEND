import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DoctorAddComponent } from './doctor-add/doctor-add.component';
import { ListDoctorsComponent } from './list-doctors/list-doctors.component';
import { DoctorsComponent } from './doctors.component';

const routes: Routes = [

 // { path: 'docdash', component: DoctorsComponent },
  { path: 'list', component: ListDoctorsComponent },
  { path: 'add', component: DoctorAddComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DoctorsRoutingModule { }
