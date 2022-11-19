import { ErrorComponent } from './plantilla/error/error.component';
import { InicioComponent } from './plantilla/inicio/inicio.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'',
    component: InicioComponent
  },
  {
    path:'administracion',
    loadChildren : () => import('./modulos/administracion/administracion.module').then(m => m.AdministracionModule)
  },
  {
    path:'seguridad',
    loadChildren : () => import('./modulos/seguridad/seguridad.module').then(m => m.SeguridadModule)
  },
  {
    path:'acceso-cliente',
    loadChildren : () => import('./modulos/acceso-cliente/acceso-cliente.module').then(m => m.AccesoClienteModule)
  },
  {
    path:'**',
    component:ErrorComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
