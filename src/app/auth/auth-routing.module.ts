import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AdmindashComponent } from './admindash/admindash.component';
import { ReceptionistdashComponent } from './receptionistdash/receptionistdash.component';
import { LabtechniciandashComponent } from './labtechniciandash/labtechniciandash.component';
import { PharmasistdashComponent } from './pharmasistdash/pharmasistdash.component';
import { DoctordashComponent } from './doctordash/doctordash.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'admin', component: AdmindashComponent },
  { path: 'receptionist', component: ReceptionistdashComponent },
  { path: 'labtechnician', component: LabtechniciandashComponent },
  { path: 'pharmacist', component: PharmasistdashComponent },
  { path: 'doctor', component: DoctordashComponent },
  { path: 'notfound', component: PagenotfoundComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule {}
