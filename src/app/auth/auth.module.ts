import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { AuthComponent } from './auth.component';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AdmindashComponent } from './admindash/admindash.component';
import { ReceptionistdashComponent } from './receptionistdash/receptionistdash.component';
import { LabtechniciandashComponent } from './labtechniciandash/labtechniciandash.component';
import { PharmasistdashComponent } from './pharmasistdash/pharmasistdash.component';
import { DoctordashComponent } from './doctordash/doctordash.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AuthComponent,
    LoginComponent,
    NavbarComponent,
    AdmindashComponent,
    ReceptionistdashComponent,
    LabtechniciandashComponent,
    PharmasistdashComponent,
    NavbarComponent,

    DoctordashComponent,
    PagenotfoundComponent


    
  ],
  imports: [
    CommonModule,

    ReactiveFormsModule,

    AuthRoutingModule
  ]
})
export class AuthModule { }
