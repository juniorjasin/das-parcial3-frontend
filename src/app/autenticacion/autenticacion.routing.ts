import { RouterModule, Routes } from "@angular/router";
import { AutenticacionComponent } from './autenticacion.component'

const routes: Routes = [
    { path: "login", component: AutenticacionComponent },    
    { path: "**", redirectTo: "/autenticacion/login" }
];
  
export const autenticacionRoutes = RouterModule.forChild(routes);