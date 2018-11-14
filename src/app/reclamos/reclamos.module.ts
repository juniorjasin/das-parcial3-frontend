import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReclamosComponent } from './reclamos.component';
import { reclamosRoutes } from './reclamos.routing'
import { ListaComponent } from './components/lista/lista.component'
import { FormularioReclamoComponent } from './components/formulario-reclamo/formulario-reclamo.component';

import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { ReclamosService } from './services/reclamos.service';
import { HttpClientModule } from '@angular/common/http';
import {MatTableModule} from '@angular/material/table';

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
    reclamosRoutes,
    HttpClientModule,
    MatTableModule
  ],
  exports: [
    ReclamosComponent
  ],
  providers: [
    ReclamosService
  ]
})
export class ReclamosModule { }
