import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PagenotfoundComponent } from './auth/pagenotfound/pagenotfound.component';
import { DoctorsComponent } from './doctors/doctors.component';
import { TestComponent } from './test/test.component';

import { MedicinesListComponent } from './medicines/medicines-list/medicines-list.component';
import { MedicinesAddComponent } from './medicines/medicines-add/medicines-add.component';
import { StaffsComponent } from './staffs/staffs.component';



import { StaffsComponent } from './staffs/staffs.component';
import { ReceptionistComponent } from './receptionist/receptionist.component';

const routes: Routes = [

  {

    path: 'doctors', component: DoctorsComponent,
    loadChildren: () => import('./doctors/doctors.module')
      .then(d => d.DoctorsModule)
  },
  {
    
    path: 'test', component: TestComponent,
    loadChildren: () => import('./test/test.module')
      .then(d => d.TestModule)
  },
   {path : 'staffs', component: StaffsComponent,
      loadChildren: () => import ('./staffs/staffs.module')
      .then(s => s.StaffsModule)
    },
    {
      path: 'receptionist', 
      loadChildren: () => import('./receptionist/receptionist.module').then(m => m.ReceptionistModule)
    },

    {
      path: 'medicines', 
      loadChildren: () => import('./medicines/medicines.module').then(me => me.MedicinesModule)
    },
  

];

 




@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }

