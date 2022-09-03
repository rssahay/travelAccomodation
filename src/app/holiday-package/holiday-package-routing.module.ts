import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthenticateGuard } from '../guards/authenticate.guard';
import { HolidayBookPackageComponent } from './holiday-book-package/holiday-book-package.component';
import { HolidaypackageSearchComponent } from './holidaypackage-search/holidaypackage-search.component';

const routes: Routes = [{
  path:'', component: HolidaypackageSearchComponent,
   children:[
    {
      path:'vaccationBooking' , component:HolidayBookPackageComponent, canActivate:[AuthenticateGuard]
    }
  ]
},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HolidayPackageRoutingModule { }
