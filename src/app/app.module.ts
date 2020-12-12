import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { MozovirtualComponent } from './pages/mozovirtual/mozovirtual.component';
import { CaracteristicaComponent } from './pages/caracteristica/caracteristica.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarPrincipalComponent } from './navbar-principal/navbar-principal.component';
import { LayoutModule } from '@angular/cdk/layout';

import { FlexLayoutModule } from '@angular/flex-layout';

import { MaterialComponentsModule } from './material-components/material-components.module';
import { HeaderComponent } from './componets/header/header.component';
import { MenuComponent } from './pages/menu/menu.component';
import { PrestashopService } from './services/prestashop.service';
import { LandingComponent } from './pages/landing/landing.component';
import { HttpClientModule } from '@angular/common/http';
import { SoapComponent } from './pages/soap/soap/soap.component';
import { NgxSoapModule } from 'ngx-soap';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MozovirtualComponent,
    CaracteristicaComponent,
    ContactoComponent,
    NavbarPrincipalComponent,
    HeaderComponent,
    MenuComponent,
    LandingComponent,
    SoapComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MaterialComponentsModule,
    FlexLayoutModule,
    HttpClientModule,
    NgxSoapModule
  ],
  providers: [ PrestashopService],
  bootstrap: [AppComponent]
})

export class AppModule { }
