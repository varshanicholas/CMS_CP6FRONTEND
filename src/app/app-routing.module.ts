import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DoctorsComponent } from './doctors/doctors.component';
<<<<<<< HEAD
import { TestComponent } from './test/test.component';
import { StaffsComponent } from './staffs/staffs.component';






const routes: Routes = [

  {

    path: 'doctors', component: DoctorsComponent,
    loadChildren: () => import('./doctors/doctors.module')
      .then(d => d.DoctorsModule)
  },
  {
    path: 'receptionist', 
    loadChildren: () => import('./receptionist/receptionist.module').then(m => m.ReceptionistModule)
  },
  {
    
    path: 'test', component: TestComponent,
    loadChildren: () => import('./test/test.module')
      .then(d => d.TestModule)
  },
    //Lazy-loading***
    {path : 'staffs', component: StaffsComponent,
      loadChildren: () => import ('./staffs/staffs.module')
      .then(s => s.StaffsModule)
    }
  

];




=======

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

 
>>>>>>> 0d007009698a20ba156b8eb72fb1e8b4ddc0a5e0

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})


export class AppRoutingModule {}

