import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BookingRoutingModule } from './booking-routing.module';
import { FligthBookingComponent } from './fligth-booking/fligth-booking.component';
import { FlightbookedHistoryComponent } from './flightbooked-history/flightbooked-history.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatInputModule} from '@angular/material/input';
import {MatNativeDateModule} from '@angular/material/core';


@NgModule({
  declarations: [
    FligthBookingComponent,
    FlightbookedHistoryComponent
  ],
  imports: [
    CommonModule,
    BookingRoutingModule,
    FormsModule,
    MatDatepickerModule,
    MatInputModule,
    MatNativeDateModule,
    ReactiveFormsModule
  ]
})
export class BookingModule { }
