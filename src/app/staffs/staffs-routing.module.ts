import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StaffsListComponent } from './staffs-list/staffs-list.component';
import { StaffsAddComponent } from './staffs-add/staffs-add.component';
import { StaffsEditComponent } from './staffs-edit/staffs-edit.component';
import { StaffsSearchComponent } from './staffs-search/staffs-search.component';

const routes: Routes = [
  //            //SETTING-UP CHILDREN ROUTES
  //   //staff-list
  { path: 'list', component: StaffsListComponent },

  //   //staff-add
  { path: 'add', component: StaffsAddComponent },

  //   //staff-edit
  { path: 'edit/:id', component: StaffsEditComponent },

  { path: 'search/:id', component: StaffsSearchComponent },


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StaffsRoutingModule { }




// import { NgModule } from '@angular/core';
// import { RouterModule, Routes } from '@angular/router';
// import { StaffsListComponent } from './staffs-list/staffs-list.component';
// import { StaffsAddComponent } from './staffs-add/staffs-add.component';
// import { StaffsEditComponent } from './staffs-edit/staffs-edit.component';

// const routes: Routes = [
//            //SETTING-UP CHILDREN ROUTES
//   //employee-list
//   {path : 'list', component: EmployeesListComponent},

//   //employee-add
//   {path : 'add', component: EmployeesAddComponent},

//   //employee-edit
//   {path : 'edit/:id', component: EmployeesEditComponent},

// ];

// @NgModule({
//   imports: [RouterModule.forChild(routes)],
//   exports: [RouterModule] //routes- to direct from one module to another module
// })
// export class EmployeesRoutingModule { }

