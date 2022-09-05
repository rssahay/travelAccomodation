import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './core/layout/layout.component';
import { LoginComponent } from './core/login/login.component';
import { AutherizationGuard } from './guards/autherization.guard';

// const routes: Routes = [{
//   path:'',
//   loadChildren :() => import('./core/core.module').then(m=>m.CoreModule)
// },{
//   path:'booking',
//   loadChildren:() => import('./booking/booking.module').then(m=>m.BookingModule)
// }];

const routes: Routes = [{
  path: '', component: LayoutComponent,
  children: [{
    path: 'booking',
    loadChildren: () => import('./booking/booking.module').then(m => m.BookingModule)
  },
  {
    path: 'hotels',
    loadChildren: () => import('./hotels/hotels.module').then(m => m.HotelsModule)
  }, {
    path: 'cabs',
    loadChildren: () => import('./cabs/cabs.module').then(m => m.CabsModule)
  }, 
  {
    path: 'package',
    loadChildren: () => import('./holiday-package/holiday-package.module').then(m => m.HolidayPackageModule)
  },
  {
    path: 'admin',
    loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule),
    canActivate:[AutherizationGuard]
  }]
}]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
