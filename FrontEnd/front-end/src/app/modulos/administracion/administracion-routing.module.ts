import { BuscarUsuarioComponent } from './usuarios/buscar-usuario/buscar-usuario.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearUsuarioComponent } from './usuarios/crear-usuario/crear-usuario.component';
import { EditarUsuarioComponent } from './usuarios/editar-usuario/editar-usuario.component';
import { EliminarUsuarioComponent } from './usuarios/eliminar-usuario/eliminar-usuario.component';
import { CrearCasoComponent } from './casos/crear-caso/crear-caso.component';
import { EditarCasoComponent } from './casos/editar-caso/editar-caso.component';
import { BuscarCasoComponent } from './casos/buscar-caso/buscar-caso.component';
import { EliminarCasoComponent } from './casos/eliminar-caso/eliminar-caso.component';
import { EliminarFaseCasoComponent } from './fase-casos/eliminar-fase-caso/eliminar-fase-caso.component';
import { BuscarFaseCasoComponent } from './fase-casos/buscar-fase-caso/buscar-fase-caso.component';
import { EditarFaseCasoComponent } from './fase-casos/editar-fase-caso/editar-fase-caso.component';
import { CrearFaseCasoComponent } from './fase-casos/crear-fase-caso/crear-fase-caso.component';

const routes: Routes = [
  {
    path: 'crear-usuario',
    component: CrearUsuarioComponent
  },
  {
    path: 'editar-usuario',
    component: EditarUsuarioComponent
  },
  {
    path:'buscar-usuario',
    component: BuscarUsuarioComponent
  },
  {
    path:'eliminar-usuario',
    component: EliminarUsuarioComponent
  },
  {
    path: 'crear-caso',
    component: CrearCasoComponent
  },
  {
    path: 'editar-caso',
    component: EditarCasoComponent
  },
  {
    path:'buscar-caso',
    component: BuscarCasoComponent
  },
  {
    path:'eliminar-caso',
    component: EliminarCasoComponent
  },
  {
    path: 'crear-fase-caso',
    component: CrearFaseCasoComponent
  },
  {
    path: 'editar-fase-caso',
    component: EditarFaseCasoComponent
  },
  {
    path:'buscar-fase-caso',
    component: BuscarFaseCasoComponent
  },
  {
    path:'eliminar-fase-caso',
    component: EliminarFaseCasoComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdministracionRoutingModule { }
