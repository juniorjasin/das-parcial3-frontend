import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReclamosComponent } from './reclamos.component';
import { reclamosRoutes } from './reclamos.routing'
import { ListaComponent } from './components/lista/lista.component'
import { FormularioReclamoComponent } from './components/formulario-reclamo/formulario-reclamo.component';
import { ReclamosService } from './services/reclamos.service';
import { HttpClientModule } from '@angular/common/http';
import { MatTableModule } from '@angular/material/table';

// material
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatIconModule} from '@angular/material/icon';

import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ReclamosComponent,
    ListaComponent,
    FormularioReclamoComponent
  ],
  imports: [
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    FormsModule,
    CommonModule,
    reclamosRoutes,
    HttpClientModule,
    MatTableModule,
    MatGridListModule,
    MatIconModule
  ],
  exports: [
    ReclamosComponent
  ],
  providers: [
    ReclamosService
  ]
})
export class ReclamosModule { }
