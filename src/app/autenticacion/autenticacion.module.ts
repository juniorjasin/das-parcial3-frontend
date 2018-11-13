import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AutenticacionComponent } from './autenticacion.component';
import { autenticacionRoutes } from './autenticacion.routing'

@NgModule({
  declarations: [
    AutenticacionComponent
  ],
  imports: [
    CommonModule,
    autenticacionRoutes
  ],
  exports: [
    AutenticacionComponent
  ]
})
export class AutenticacionModule { }
