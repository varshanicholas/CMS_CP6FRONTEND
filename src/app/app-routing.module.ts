import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StaffsComponent } from './staffs/staffs.component';
import { MedicinesComponent } from './medicines/medicines.component';
const routes: Routes = [
  {
    path: 'receptionist',
    loadChildren: () => import('./receptionist/receptionist.module').then(m => m.ReceptionistModule)
  },
  {
    path: 'staffs', component: StaffsComponent,
    loadChildren: () => import('./staffs/staffs.module')
      .then(s => s.StaffsModule)
  },

  {
    path: 'medicines', component: MedicinesComponent,
    loadChildren: () => import('./medicines/medicines.module')
      .then(m => m.MedicinesModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }




