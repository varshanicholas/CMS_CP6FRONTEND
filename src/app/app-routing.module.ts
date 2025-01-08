import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { HomeComponent } from './home/home.component';
// import { AboutComponent } from './about/about.component';
import { MedicinesListComponent } from './medicines/medicines-list/medicines-list.component';
import { MedicinesAddComponent } from './medicines/medicines-add/medicines-add.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' }, // Default route
  // { path: 'home', component: HomeComponent },
  // { path: 'about', component: AboutComponent },
  { path: 'medicines/list', component: MedicinesListComponent },
  { path: 'medicines/add', component: MedicinesAddComponent },
  { path: '**', redirectTo: '/home' } // Wildcard route for a 404 page
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
