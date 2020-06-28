import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainHomeComponent } from './home-module/components/main-home/main-home.component'
import { ErrorComponent } from './components/error/error.component'

const routes: Routes = [
  {
    path: '',
    component: MainHomeComponent,
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
