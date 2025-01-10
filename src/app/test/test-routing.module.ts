import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TestAddComponent } from './test-add/test-add.component';

const routes: Routes = [
  {path: 'add', component: TestAddComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TestRoutingModule { }
