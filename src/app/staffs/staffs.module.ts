import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StaffsRoutingModule } from './staffs-routing.module';
import { StaffsComponent } from './staffs.component';
import { StaffsAddComponent } from './staffs-add/staffs-add.component';
import { StaffsEditComponent } from './staffs-edit/staffs-edit.component';
import { StaffsListComponent } from './staffs-list/staffs-list.component';
//import { NgxPaginationModule } from 'ngx-pagination';
// import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    StaffsComponent,
    StaffsAddComponent,
    StaffsEditComponent,
    StaffsListComponent
  ],
  imports: [
    CommonModule,
    StaffsRoutingModule,
   
   //NgxPaginationModule,
   //Ng2SearchPipeModule,
   FormsModule
  ]
})
export class StaffsModule { }



























// import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';

// import { EmployeesRoutingModule } from './employees-routing.module';
// import { EmployeesComponent } from './employees.component';
// import { EmployeesAddComponent } from './employees-add/employees-add.component';
// import { EmployeesEditComponent } from './employees-edit/employees-edit.component';
// import { EmployeesListComponent } from './employees-list/employees-list.component';
// import { NgxPaginationModule } from 'ngx-pagination';
// import { Ng2SearchPipeModule } from 'ng2-search-filter';
// import { FormsModule } from '@angular/forms';

// @NgModule({
//   declarations: [
//     EmployeesComponent,
//     EmployeesAddComponent,
//     EmployeesEditComponent,
//     EmployeesListComponent
//   ],
//   imports: [
//     CommonModule,
//     EmployeesRoutingModule,
//     NgxPaginationModule,
//     Ng2SearchPipeModule,
//     FormsModule
    
//   ]
// })
// export class EmployeesModule { }
