import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { SharedComponent } from './shared.component';
// import { RoleComponent } from './model/role/role.component';
// import { AuthComponent } from './service/auth/auth.component';


@NgModule({
  declarations: [
    SharedComponent,
    // RoleComponent,
    // AuthComponent
  ],
  imports: [
    CommonModule,
    SharedRoutingModule
  ]
})
export class SharedModule { }
