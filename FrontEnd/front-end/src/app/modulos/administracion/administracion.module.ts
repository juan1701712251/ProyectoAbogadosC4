import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdministracionRoutingModule } from './administracion-routing.module';
import { BuscarUsuarioComponent } from './usuarios/buscar-usuario/buscar-usuario.component';
import { CrearUsuarioComponent } from './usuarios/crear-usuario/crear-usuario.component';
import { EditarUsuarioComponent } from './usuarios/editar-usuario/editar-usuario.component';
import { EliminarUsuarioComponent } from './usuarios/eliminar-usuario/eliminar-usuario.component';
import { BuscarCasoComponent } from './casos/buscar-caso/buscar-caso.component';
import { CrearCasoComponent } from './casos/crear-caso/crear-caso.component';
import { EditarCasoComponent } from './casos/editar-caso/editar-caso.component';
import { EliminarCasoComponent } from './casos/eliminar-caso/eliminar-caso.component';
import { BuscarFaseCasoComponent } from './fase-casos/buscar-fase-caso/buscar-fase-caso.component';
import { CrearFaseCasoComponent } from './fase-casos/crear-fase-caso/crear-fase-caso.component';
import { EditarFaseCasoComponent } from './fase-casos/editar-fase-caso/editar-fase-caso.component';
import { EliminarFaseCasoComponent } from './fase-casos/eliminar-fase-caso/eliminar-fase-caso.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    BuscarUsuarioComponent,
    CrearUsuarioComponent,
    EditarUsuarioComponent,
    EliminarUsuarioComponent,
    BuscarCasoComponent,
    CrearCasoComponent,
    EditarCasoComponent,
    EliminarCasoComponent,
    BuscarFaseCasoComponent,
    CrearFaseCasoComponent,
    EditarFaseCasoComponent,
    EliminarFaseCasoComponent
  ],
  imports: [
    CommonModule,
    AdministracionRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class AdministracionModule { }
