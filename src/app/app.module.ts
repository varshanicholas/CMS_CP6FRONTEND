import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MedicinesListComponent } from './medicines/medicines-list/medicines-list.component';
import { MedicinesAddComponent } from './medicines/medicines-add/medicines-add.component';

@NgModule({
  declarations: [
    AppComponent,
    // HomeComponent,
    // AboutComponent,
    MedicinesListComponent,
    MedicinesAddComponent 
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
