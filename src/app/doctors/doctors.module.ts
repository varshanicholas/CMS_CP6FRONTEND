import { CommonModule } from "@angular/common";
import { DoctorAddComponent } from "./doctor-add/doctor-add.component";
import { DoctorsComponent } from "./doctors.component";
import { DoctorsRoutingModule } from "./doctors-routing.module";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { NgxPaginationModule } from "ngx-pagination";
import { Ng2SearchPipeModule } from "ng2-search-filter";
import { NgModule } from "@angular/core";
import { ListDoctorsComponent } from "./list-doctors/list-doctors.component";

@NgModule({
    declarations: [
      DoctorsComponent,
      DoctorAddComponent,
      ListDoctorsComponent // Add this if it's part of this module
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
  