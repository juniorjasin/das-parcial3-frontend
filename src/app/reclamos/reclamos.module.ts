import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReclamosComponent } from './reclamos.component';
import { reclamosRoutes } from './reclamos.routing'
import { ListaComponent } from './components/lista/lista.component'
import { FormularioReclamoComponent } from './components/formulario-reclamo/formulario-reclamo.component';

import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';

@NgModule({
  declarations: [
    ReclamosComponent,
    ListaComponent,
    FormularioReclamoComponent
  ],
  imports: [
    MatInputModule,
    MatFormFieldModule,
    CommonModule,
    reclamosRoutes
  ],
  exports: [
    ReclamosComponent
  ]
})
export class ReclamosModule { }
