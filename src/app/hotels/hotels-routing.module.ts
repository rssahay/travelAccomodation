import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HotelsearchComponent } from './hotelsearch/hotelsearch.component';

const routes: Routes = [{
  path:'', component:HotelsearchComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HotelsRoutingModule { }
