import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HolidayPackageRoutingModule } from './holiday-package-routing.module';
import { HolidaypackageSearchComponent } from './holidaypackage-search/holidaypackage-search.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HolidayBookPackageComponent } from './holiday-book-package/holiday-book-package.component';


@NgModule({
  declarations: [
    HolidaypackageSearchComponent,
    HolidayBookPackageComponent
  ],
  imports: [
    CommonModule,
    HolidayPackageRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class HolidayPackageModule { }
