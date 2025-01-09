import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { StaffsComponent } from './staffs/staffs.component';
import { ReceptionistComponent } from './receptionist/receptionist.component';

const routes: Routes = [
  //{ path: '', redirectTo: '/home', pathMatch: 'full' }, // Default route
  // { path: 'home', component: HomeComponent },
  // { path: 'about', component: AboutComponent },
 // { path: 'medicines/list', component: MedicinesListComponent },
 // { path: 'medicines/add', component: MedicinesAddComponent },
  //{ path: '**', redirectTo: '/home' } ,// Wildcard route for a 404 page

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
  exports: [RouterModule]
})
export class AppRoutingModule { }

