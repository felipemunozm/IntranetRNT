import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'
import { TramitesRoutingModule } from './tramites-module.routing'
import { MainTramitesComponent } from './components/main-tramites/main-tramites.component';
import { IncripcionBteComponent } from './components/incripcion-bte/incripcion-bte.component';
import { IncripcionColectivoComponent } from './components/incripcion-colectivo/incripcion-colectivo.component';
import { ReemplazoBtecComponent } from './components/reemplazo-btec/reemplazo-btec.component';
import { InscripcionBusesComponent } from './components/inscripcion-buses/inscripcion-buses.component';
import { ValidarPersonaServicioComponent } from './components/commons/validar-persona-servicio/validar-persona-servicio.component';
import { IngresoPatentesComponent } from './components/commons/ingreso-patentes/ingreso-patentes.component';
import { IngresoPersonasComponent } from './components/commons/ingreso-personas/ingreso-personas.component';
import { IngresoFlotaComponent } from './components/commons/ingreso-flota/ingreso-flota.component';
import { IngresoConductoresComponent } from './components/commons/ingreso-conductores/ingreso-conductores.component';
import { IngresoAdultosComponent } from './components/commons/ingreso-adultos/ingreso-adultos.component';



@NgModule({
  declarations: [MainTramitesComponent, IncripcionBteComponent, IncripcionColectivoComponent, ReemplazoBtecComponent, InscripcionBusesComponent, ValidarPersonaServicioComponent, IngresoPatentesComponent, IngresoPersonasComponent, IngresoFlotaComponent, IngresoConductoresComponent, IngresoAdultosComponent],
  imports: [
    FormsModule,
    TramitesRoutingModule,
    CommonModule
  ]
})
export class TramitesModuleModule { }
