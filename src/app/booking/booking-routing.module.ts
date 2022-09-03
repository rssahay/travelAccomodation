import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FlightbookedHistoryComponent } from './flightbooked-history/flightbooked-history.component';
import { FligthBookingComponent } from './fligth-booking/fligth-booking.component';

const routes: Routes = [{
  path:'', component: FligthBookingComponent,
  children:[{
    path:'flightbookedHistory', component:FlightbookedHistoryComponent
  }]
},


// {
//   path:'flightbookedHistory', component:FlightbookedHistoryComponent
// }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BookingRoutingModule { }
