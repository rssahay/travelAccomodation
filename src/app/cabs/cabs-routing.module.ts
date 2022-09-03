import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CabsSearchComponent } from './cabs-search/cabs-search.component';

const routes: Routes = [
  {
    path:'' , component:CabsSearchComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CabsRoutingModule { }
