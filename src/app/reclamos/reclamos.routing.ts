import { RouterModule, Routes } from "@angular/router";
import { ListaComponent } from './components/lista/lista.component'
import { FormularioReclamoComponent } from './components/formulario-reclamo/formulario-reclamo.component'
import { ReclamosComponent } from "./reclamos.component";

const routes: Routes = [
    { path: "", component:  ReclamosComponent, children: [
        { path: "lista", component:  ListaComponent},
        { path: ":nro_reclamo/formulario", component:  FormularioReclamoComponent},
        { path: "**", redirectTo: 'lista'}
    ]}
];
  
export const reclamosRoutes = RouterModule.forChild(routes);