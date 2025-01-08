import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { NavbarComponent } from './navbar/navbar.component';
import { DoctordashComponent } from './doctordash/doctordash.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';


@NgModule({
  declarations: [
    NavbarComponent,
    DoctordashComponent,
    PagenotfoundComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule
  ]
})
export class AuthModule { }
