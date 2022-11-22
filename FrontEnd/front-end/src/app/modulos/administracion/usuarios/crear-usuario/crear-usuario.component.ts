import { ModeloUsuario } from './../../../../modelos/usuario.model';
import { UsuarioService } from './../../../../servicios/usuario.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-crear-usuario',
  templateUrl: './crear-usuario.component.html',
  styleUrls: ['./crear-usuario.component.css']
})
export class CrearUsuarioComponent implements OnInit {

  fgValidador : FormGroup = this.fb.group({
    'nombre':['', [Validators.required]],
    'apellido':['', [Validators.required]],
    'correo':['', [Validators.required]],
    'celular':['', [Validators.required]],
    'direccion':['', [Validators.required]],
    'rol':['', [Validators.required]]
  });

  constructor(private usuarioService : UsuarioService,
    private fb : FormBuilder,
    private router : Router) { }

  ngOnInit(): void {
  }

  GuardarUsuario(){
    // Sacar la info del formulario
    let nombre = this.fgValidador.controls['nombre'].value;
    let apellido = this.fgValidador.controls['apellido'].value;
    let correo = this.fgValidador.controls['correo'].value;
    let celular = this.fgValidador.controls['celular'].value;
    let direccion = this.fgValidador.controls['direccion'].value;
    let rol = this.fgValidador.controls['rol'].value;

    // Crear una instancia del modelo y llenarlo
    let modelo = new ModeloUsuario();
    modelo.nombre = nombre;
    modelo.apellido = apellido;
    modelo.correo = correo;
    modelo.celular = celular;
    modelo.direccion = direccion;
    modelo.rol = rol;

    // Llamar el servcio de creación del usuario
    this.usuarioService.CrearUsuario(modelo).subscribe(
      (datos) => {
        alert("Registro almacenado");
        this.router.navigate(["/administracion/buscar-usuario"]);
      },
      (error) => {
        alert("Error almacenado el registro");
      }
    )
  }

}
