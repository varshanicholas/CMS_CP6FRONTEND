
// import { MedicinesListComponent } from './medicine-list/medicine-list.component';
// import { MedicinesAddComponent } from './medicine-add/medicine-add.component';
// import { MedicineEditComponent } from './medicine-edit/medicine-edit.component';
// import { RouterModule, Routes } from '@angular/router';
// import { NgModule } from '@angular/core';

// const routes: Routes = [

//   //medicine-list

// {path:'list',component:MedicinesListComponent},
//   //medicine-add

//   {path:'add',component:MedicinesAddComponent},

//   //medicine-edit

//   {path:'edit/:id',component:MedicineEditComponent},

// ];


import { MedicinesListComponent } from './medicine-list/medicine-list.component';
import { MedicinesAddComponent } from './medicine-add/medicine-add.component';
import { MedicineEditComponent } from './medicine-edit/medicine-edit.component';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

const routes: Routes = [

  //medicine-list

{path:'list',component:MedicinesListComponent},
  //medicine-add

  {path:'add',component:MedicinesAddComponent},

  //medicine-edit

  {path:'edit/:id',component:MedicineEditComponent},

];



// @NgModule({
//   imports: [RouterModule.forChild(routes)],
//   exports: [RouterModule]
// })
// export class MedicinesRoutingModule { }

