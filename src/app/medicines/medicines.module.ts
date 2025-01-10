import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MedicinesRoutingModule } from './medicines-routing.module';
import { MedicinesComponent } from './medicines.component';
import { MedicineAddComponent } from './medicine-add/medicine-add.component';
import { MedicineEditComponent } from './medicine-edit/medicine-edit.component';
import { MedicinesListComponent } from './medicine-list/medicine-list.component';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MedicinesRoutingModule,



   MedicineAddComponent,
   MedicineEditComponent,
   MedicinesListComponent

  ],
  imports: [
    CommonModule,
    MedicinesRoutingModule,
    

  ]
})
export class MedicinesModule { }
