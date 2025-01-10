import { NgModule } from '@angular/core';

<<<<<<< HEAD
//import { NgxPaginationModule } from 'ngx-pagination';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//import { ToastrModule } from 'ngx-toastr';
//import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import{HttpClientModule}from '@angular/common/http';
=======
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
>>>>>>> 0d007009698a20ba156b8eb72fb1e8b4ddc0a5e0
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxPaginationModule } from 'ngx-pagination';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ToastrModule } from 'ngx-toastr';
import { UserregistrationComponent } from './model/userregistration/userregistration.component';

@NgModule({
  declarations: [

    AppComponent,

   
    UserregistrationComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

<<<<<<< HEAD
    // HomeComponent,
    // AboutComponent,
    //MedicinesListComponent,
    //MedicinesAddComponent 
   ],
=======
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    NgxPaginationModule,

    CommonModule,

    RouterModule,
    FormsModule,
 
    BrowserAnimationsModule,
    ToastrModule.forRoot()


  ],
>>>>>>> 0d007009698a20ba156b8eb72fb1e8b4ddc0a5e0
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }



