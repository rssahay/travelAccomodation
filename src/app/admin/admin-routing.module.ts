import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminworkComponent } from './adminwork/adminwork.component';

const routes: Routes = [{
  path:'' ,component:AdminworkComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
