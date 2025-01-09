import { NgModule } from '@angular/core';

//import { NgxPaginationModule } from 'ngx-pagination';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//import { ToastrModule } from 'ngx-toastr';
//import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import{HttpClientModule}from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { ToastrModule } from 'ngx-toastr';


@NgModule({
  declarations: [
    AppComponent,

    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    RouterModule,
    FormsModule,
    HttpClientModule,
    ToastrModule.forRoot(),

    // HomeComponent,
    // AboutComponent,
    //MedicinesListComponent,
    //MedicinesAddComponent 
   ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }







// @NgModule({
//   declarations: [
//     // Your components
//   ],
//   imports: [
//     // Your other modules
//     NgxPaginationModule
//   ],
//   // Other module properties
// })
// export class AppModule { }











// import { NgModule } from '@angular/core';
// import { BrowserModule } from '@angular/platform-browser';

// import { AppRoutingModule } from './app-routing.module';
// import { AppComponent } from './app.component';

// import { HttpClientModule } from '@angular/common/http';
// import { ToastrModule } from 'ngx-toastr';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// @NgModule({
//   declarations: [
//     AppComponent
//   ],
//   imports: [
//     BrowserModule,
//     FormsModule,
//     AppRoutingModule,
//     ReactiveFormsModule,
//     HttpClientModule,
//     ToastrModule.forRoot(),
//     BrowserAnimationsModule
//   ],
//   providers: [],
//   bootstrap: [AppComponent]
// })
// export class AppModule { }

