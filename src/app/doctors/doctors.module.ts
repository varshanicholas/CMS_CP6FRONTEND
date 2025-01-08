import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DoctorsRoutingModule } from './doctors-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DoctorsComponent } from './doctors.component';
import { DoctorAddComponent } from './doctor-add/doctor-add.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { ListDoctorsComponent } from './list-doctors/list-doctors.component';

@NgModule({
  declarations: [
    DoctorsComponent,
    DoctorAddComponent,
    ListDoctorsComponent
  ],
  imports: [
    CommonModule,
     DoctorsRoutingModule, 
     NgxPaginationModule,
    Ng2SearchPipeModule,
     FormsModule,
     ReactiveFormsModule
    ],
})
export class DoctorsModule { }
