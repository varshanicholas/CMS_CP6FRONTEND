import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DoctorsComponent } from './doctors/doctors.component';

import { PagenotfoundComponent } from './auth/pagenotfound/pagenotfound.component';

import { TestComponent } from './test/test.component';
import { ReceptionistComponent } from './receptionist/receptionist.component';
import { StaffsComponent } from './staffs/staffs.component';
// import { MedicinesComponent } from './medicines/medicines.component';
import { AuthComponent } from './auth/auth.component';
const routes: Routes = [

   //empty routes
   {path : '', redirectTo: 'auth/login', pathMatch: 'full'
    
   },
  
  {
    path: 'staffs', component: StaffsComponent,
    loadChildren: () => import('./staffs/staffs.module')
      .then(s => s.StaffsModule)
  },
 {
    path: 'test',
    component: TestComponent,
    loadChildren: () => import('./test/test.module').then((d) => d.TestModule),
  },

  {
    path: 'receptionist',
    loadChildren: () =>
      import('./receptionist/receptionist.module').then(
        (m) => m.ReceptionistModule
      ),
  },

  {
    path: 'medicines',
    loadChildren: () =>
      import('./medicines/medicines.module').then((me) => me.MedicinesModule),
  },
    {path: 'auth', component: AuthComponent,
    loadChildren: () => import('./auth/auth.module').then(x => x.AuthModule)
  } ,
 //empty routes
   {path : '**', redirectTo: 'auth/notfound', pathMatch: 'full'
    
   };

];
  // {
  //   path: 'medicines', component: MedicinesComponent,
  //   loadChildren: () => import('./medicines/medicines.module')
  //     .then(m => m.MedicinesModule)
  // },

 

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})


export class AppRoutingModule {}

