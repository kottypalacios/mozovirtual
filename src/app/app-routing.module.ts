import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { CaracteristicaComponent } from './pages/caracteristica/caracteristica.component';
import { HomeComponent } from './pages/home/home.component';
import { MozovirtualComponent } from './pages/mozovirtual/mozovirtual.component';

const routes: Routes = [
 {
    path: '',
    component: HomeComponent
  },
  {
    path: 'mozovirtual',
    component: MozovirtualComponent
  },
  {
    path: 'contacto',
    component: ContactoComponent
  },
  {
    path: 'caracteristica',
    component: CaracteristicaComponent
  },
  {
    path: '**',
    component: HomeComponent
  },
  {
    path: 'home',
    component: HomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
