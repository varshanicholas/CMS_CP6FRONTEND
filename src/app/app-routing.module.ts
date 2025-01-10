import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StaffsComponent } from './staffs/staffs.component';
// import { MedicinesComponent } from './medicines/medicines.component';
import { AuthComponent } from './auth/auth.component';
const routes: Routes = [

   //empty routes
   {path : '', redirectTo: 'auth/login', pathMatch: 'full'
    
   },
   {
    path: 'receptionist',
    loadChildren: () => import('./receptionist/receptionist.module').then(m => m.ReceptionistModule)
  },
  {
    path: 'staffs', component: StaffsComponent,
    loadChildren: () => import('./staffs/staffs.module')
      .then(s => s.StaffsModule)
  },

  // {
  //   path: 'medicines', component: MedicinesComponent,
  //   loadChildren: () => import('./medicines/medicines.module')
  //     .then(m => m.MedicinesModule)
  // },
  {path: 'auth', component: AuthComponent,
    loadChildren: () => import('./auth/auth.module').then(x => x.AuthModule)
  } ,

  {path: '**', redirectTo: 'auth/notfound', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }




