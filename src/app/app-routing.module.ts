import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MenuComponent } from './pages/menu/menu.component';
import { LandingComponent } from './pages/landing/landing.component';

const routes: Routes = [
 {
    path: '',
    component: LandingComponent
  },
  
  {
    path: 'menu',
    component: MenuComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
