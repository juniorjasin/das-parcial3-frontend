import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AutenticacionComponent } from './autenticacion.component';
import { autenticacionRoutes } from './autenticacion.routing';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { AutenticacionService } from './services/autenticacion.service';
import { HttpClientModule } from '@angular/common/http';
import { MatCheckboxModule, MatGridListModule, MatIconModule } from '@angular/material';


@NgModule({
  declarations: [
    AutenticacionComponent
  ],
  imports: [
    CommonModule,
    autenticacionRoutes,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    FormsModule,
    HttpClientModule,
    MatCheckboxModule,
    MatGridListModule,
    MatIconModule
  ],
  exports: [
    AutenticacionComponent
  ],
  providers:[
    AutenticacionService
  ]
})
export class AutenticacionModule { }
