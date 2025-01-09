import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PatientregListComponent } from './patientreg-list/patientreg-list.component';
import { PatientregAddComponent } from './patientreg-add/patientreg-add.component';
import { PatientregEditComponent } from './patientreg-edit/patientreg-edit.component';
import { AppointmentsComponent } from './appointments/appointments.component';


const routes: Routes = [

  //patient-list

{path:'list',component:PatientregListComponent},
  //employee-add

  {path:'add',component:PatientregAddComponent},

  //employee-edit

  {path:'edit/:id',component:PatientregEditComponent},

  {path:'appointments',component:AppointmentsComponent},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReceptionistRoutingModule { }
