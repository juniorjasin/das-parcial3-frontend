import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { FormularioLoginComponent } from './formulario-login/formulario-login.component';
import { InputComponent } from './input/input.component';
import { ButtonComponent } from './button/button.component';
import { TablaComponent } from './tabla/tabla.component';
import { ReclamosComponent } from './reclamos/reclamos.component';
import { FormularioReclamosComponent } from './formulario-reclamos/formulario-reclamos.component';
import { FormularioReclamoComponent } from './formulario-reclamo/formulario-reclamo.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    FormularioLoginComponent,
    InputComponent,
    ButtonComponent,
    TablaComponent,
    ReclamosComponent,
    FormularioReclamosComponent,
    FormularioReclamoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
