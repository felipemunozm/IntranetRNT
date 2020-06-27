
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//componentes
import { MainTramitesComponent } from './components/main-tramites/main-tramites.component'
import { IncripcionBteComponent } from './components/incripcion-bte/incripcion-bte.component'
import { IncripcionColectivoComponent } from './components/incripcion-colectivo/incripcion-colectivo.component'
import { ReemplazoBtecComponent } from './components/reemplazo-btec/reemplazo-btec.component'
import { InscripcionBusesComponent } from './components/inscripcion-buses/inscripcion-buses.component'

const routes: Routes = [
    {
        path: 'tramites',
        component: MainTramitesComponent,
        children: [
            {
                path: 'inscripcion-bte',
                component: IncripcionBteComponent
            },
            {
                path: 'inscripcion-colectivo',
                component: IncripcionColectivoComponent
            },
            {
                path: 'reemplazo-btec',
                component: ReemplazoBtecComponent
            },
            {
                path: 'inscripcion-buses',
                component: InscripcionBusesComponent
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class TramitesRoutingModule { }