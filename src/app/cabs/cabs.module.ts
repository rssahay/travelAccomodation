import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CabsRoutingModule } from './cabs-routing.module';
import { CabsSearchComponent } from './cabs-search/cabs-search.component';


@NgModule({
  declarations: [
    CabsSearchComponent
  ],
  imports: [
    CommonModule,
    CabsRoutingModule
  ]
})
export class CabsModule { }
