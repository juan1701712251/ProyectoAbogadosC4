import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ModeloUsuario } from 'src/app/modelos/usuario.model';
import { UsuarioService } from 'src/app/servicios/usuario.service';

@Component({
  selector: 'app-editar-usuario',
  templateUrl: './editar-usuario.component.html',
  styleUrls: ['./editar-usuario.component.css']
})
export class EditarUsuarioComponent implements OnInit {

  id : string = "";
  fgValidador : FormGroup = this.fb.group({
    'id':['', [Validators.required]],
    'nombre':['', [Validators.required]],
    'apellido':['', [Validators.required]],
    'correo':['', [Validators.required]],
    'celular':['', [Validators.required]],
    'direccion':['', [Validators.required]],
    'rol':['', [Validators.required]]
  });

  constructor(private usuarioService : UsuarioService,
    private fb : FormBuilder,
    private router : Router,
    private route : ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params["id"];
    this.BuscarUsuario();
  }

  BuscarUsuario(){
    this.usuarioService.ObtenerRegistroPorId(this.id).subscribe(
      (datos:ModeloUsuario) => {
        this.fgValidador.controls['id'].setValue(datos.id);
        this.fgValidador.controls['nombre'].setValue(datos.nombre);
        this.fgValidador.controls['apellido'].setValue(datos.apellido);
        this.fgValidador.controls['correo'].setValue(datos.correo);
        this.fgValidador.controls['celular'].setValue(datos.celular);
        this.fgValidador.controls['direccion'].setValue(datos.direccion);
        this.fgValidador.controls['rol'].setValue(datos.rol);
      },
      (error) => {
        console.log("Error buscando el usuario");
      }
    )
  }

  ActualizarUsuario(){
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

    // Llamar el servcio de actualización del usuario
    this.usuarioService.ActualizarUsuarioPorId(this.id,modelo).subscribe(
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
