import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccesoClienteRoutingModule } from './acceso-cliente-routing.module';
import { VerCasosComponent } from './ver-casos/ver-casos.component';
import { SolicitarAsesoriaComponent } from './solicitar-asesoria/solicitar-asesoria.component';
import { ContactenosComponent } from './contactenos/contactenos.component';


@NgModule({
  declarations: [
    VerCasosComponent,
    SolicitarAsesoriaComponent,
    ContactenosComponent
  ],
  imports: [
    CommonModule,
    AccesoClienteRoutingModule
  ]
})
export class AccesoClienteModule { }
