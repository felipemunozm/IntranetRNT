import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainHomeComponent } from './home-module/components/main-home/main-home.component'
import { ErrorComponent } from './components/error/error.component'
import { ContactoComponent } from './components/contacto/contacto.component'
import { MisDatosComponent } from './components/mis-datos/mis-datos.component'
import { MisTramitesComponent } from './components/mis-tramites/mis-tramites.component'

const routes: Routes = [
  {
    path: '',
    component: MainHomeComponent,
  },
  {
    path: 'contacto',
    component: ContactoComponent,
  },
  {
    path: 'mis-datos',
    component: MisDatosComponent,
  },
  {
    path: 'mis-tramites',
    component: MisTramitesComponent,
  },
  {
    path: '**',
    component: ErrorComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
