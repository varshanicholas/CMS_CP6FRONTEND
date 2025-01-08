import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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
