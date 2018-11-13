import { RouterModule, Routes } from "@angular/router";

const routes: Routes = [
    { path: "autenticacion", loadChildren: "./autenticacion/autenticacion.module#AutenticacionModule" },
    { path: "reclamos", loadChildren: "./reclamos/reclamos.module#ReclamosModule" },
    { path: "**", redirectTo: "autenticacion", pathMatch: "full" }
];

export const appRoutes = RouterModule.forRoot(routes);