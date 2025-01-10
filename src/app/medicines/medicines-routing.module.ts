import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MedicinesListComponent } from './medicine-list/medicines-list.component';
import { MedicinesAddComponent } from './medicine-add/medicine-add.component';
//import { MedicinesEditComponent } from './medicines-edit/medicines-edit.component';









const routes: Routes = [
//   //            //SETTING-UP CHILDREN ROUTES
// //   //staff-list
  {path : 'list', component: MedicinesListComponent},

// //   //staff-add
  {path : 'add', component: MedicinesAddComponent},

// //   //staff-edit
 // {path : 'edit/:id', component: MedicinesEditComponent},




];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MedicinesRoutingModule { }

