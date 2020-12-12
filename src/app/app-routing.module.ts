import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MenuComponent } from './pages/menu/menu.component';
import { LandingComponent } from './pages/landing/landing.component';
import { SoapComponent } from './pages/soap/soap/soap.component';

const routes: Routes = [
 {
    path: '',
    component: LandingComponent
  },
  
  {
    path: 'menu',
    component: MenuComponent
  },
  {path:'soap', component: SoapComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
