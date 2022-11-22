import { UsuarioService } from './../../../../servicios/usuario.service';
import { Component, OnInit } from '@angular/core';
import { ModeloUsuario } from 'src/app/modelos/usuario.model';

@Component({
  selector: 'app-buscar-usuario',
  templateUrl: './buscar-usuario.component.html',
  styleUrls: ['./buscar-usuario.component.css']
})
export class BuscarUsuarioComponent implements OnInit {

  listadoUsuarios: ModeloUsuario[] = []

  constructor(private usuarioService : UsuarioService) { }

  ngOnInit(): void {
    this.LlenarListadoUsuarios();
  }

  LlenarListadoUsuarios(){
    this.usuarioService.ObtenerRegistros().subscribe(
      (resultado) => {
        this.listadoUsuarios = resultado;
      },
      (error) => {
        console.log(error);
      }
    );
  }

}
