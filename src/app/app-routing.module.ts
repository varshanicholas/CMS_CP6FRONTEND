import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

 import { StaffsComponent } from './staffs/staffs.component';
//const routes: Routes = [];

const routes: Routes = [
  //SETTING-UP PARENT ROUTES
    //empty routes
   // {path : '', redirectTo: 'auth/login', pathMatch: 'full'},

    //staffs-component
    //Lazy-loading***
    {path : 'staffs', component: StaffsComponent,
      loadChildren: () => import ('./staffs/staffs.module')
      .then(s => s.StaffsModule)
    },






];

//import { EmployeeListComponent } from './employees/employee-list/employee-list.component';
import { ReceptionistComponent } from './receptionist/receptionist.component';


const routes: Routes = [
  {
    path: 'receptionist', 
    loadChildren: () => import('./receptionist/receptionist.module').then(m => m.ReceptionistModule)
  },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }



// import { NgModule } from '@angular/core';
// import { RouterModule, Routes } from '@angular/router';
// import { EmployeesComponent } from './employees/employees.component';
// import { AuthComponent } from './auth/auth.component';

// const routes: Routes = [
//   //SETTING-UP PARENT ROUTES
//     //empty routes
//     {path : '', redirectTo: 'auth/login', pathMatch: 'full'},

//     //employee-component
//     //Lazy-loading***
//     {path : 'employees', component: EmployeesComponent,
//       loadChildren: () => import ('./employees/employees.module')
//       .then(e => e.EmployeesModule)
//     },

//     {path: 'auth', component: AuthComponent,
//       loadChildren: () => import('./auth/auth.module').then(x => x.AuthModule)
//     } ,

//     //WildCard Routes: Redirect to Notfound, when path notmatched.
//     //empty routes always -beginning and WildCard routes - at th end
//     {path: '**', redirectTo: 'auth/notfound', pathMatch: 'full'}

// ];

// @NgModule({
//   imports: [RouterModule.forRoot(routes)],
//   exports: [RouterModule]
// })
// export class AppRoutingModule { }
