import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagenotfoundComponent } from './auth/pagenotfound/pagenotfound.component';
import { DoctorsComponent } from './doctors/doctors.component';
import { TestComponent } from './test/test.component';



const routes: Routes = [

  {

    path: 'doctors', component: DoctorsComponent,
    loadChildren: () => import('./doctors/doctors.module')
      .then(d => d.DoctorsModule)
  },
  {
    
    path: 'test', component: TestComponent,
    loadChildren: () => import('./test/test.module')
      .then(d => d.TestModule)
  },
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
