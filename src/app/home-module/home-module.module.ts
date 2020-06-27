import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './home-module.routing'
import { MainHomeComponent } from './components/main-home/main-home.component';



@NgModule({
  declarations: [MainHomeComponent],
  imports: [
    CommonModule,
    AdminRoutingModule
  ],
  exports: [MainHomeComponent]
})
export class HomeModuleModule { }
