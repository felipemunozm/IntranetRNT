
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//componentes
import { MainHomeComponent } from './components/main-home/main-home.component'
const routes: Routes = [
    {
        path: 'home',
        component: MainHomeComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AdminRoutingModule { }