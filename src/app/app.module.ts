import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuHeaderComponent } from './components/menu-header/menu-header.component';
import { HomeModuleModule } from './home-module/home-module.module'
import { TramitesModuleModule } from './tramites-module/tramites-module.module';
import { ErrorComponent } from './components/error/error.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { MisTramitesComponent } from './components/mis-tramites/mis-tramites.component';
import { MisDatosComponent } from './components/mis-datos/mis-datos.component'

@NgModule({
  declarations: [
    AppComponent,
    MenuHeaderComponent,
    ErrorComponent,
    ContactoComponent,
    MisTramitesComponent,
    MisDatosComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HomeModuleModule,
    TramitesModuleModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
