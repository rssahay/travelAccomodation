import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { LayoutComponent } from './layout/layout.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';

const routes: Routes = [{
  path:'', component:LoginComponent
},{
  path:'layout', component:LayoutComponent, 
  // children:[{
  //   path:'',
  //   loadChildren:() =>import('../booking/booking.module').then(m => m.BookingModule)
  // },{
  //   path:'hotels',
  //   loadChildren:() => import('../hotels/hotels.module').then(m => m.HotelsModule)
  // }]
},
{
  path:'header', component:HeaderComponent
},{
  path: 'logout', component:LogoutComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoreRoutingModule { }
