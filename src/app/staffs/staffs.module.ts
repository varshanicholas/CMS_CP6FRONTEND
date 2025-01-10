import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



import { StaffsRoutingModule } from './staffs-routing.module';
import { StaffsComponent } from './staffs.component';
import { StaffsAddComponent } from './staffs-add/staffs-add.component';
import { StaffsEditComponent } from './staffs-edit/staffs-edit.component';
import { StaffsListComponent } from './staffs-list/staffs-list.component';
import { StaffsSearchComponent } from './staffs-search/staffs-search.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    StaffsComponent,
    StaffsAddComponent,
    StaffsEditComponent,
    StaffsListComponent,
    StaffsSearchComponent
  ],
  imports: [
    CommonModule,
    StaffsRoutingModule,
    NgxPaginationModule,
    Ng2SearchPipeModule,
   FormsModule
  ]
})
export class StaffsModule { }
