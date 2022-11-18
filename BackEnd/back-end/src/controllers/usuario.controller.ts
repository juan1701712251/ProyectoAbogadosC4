import { authenticate } from '@loopback/authentication';
import { service } from '@loopback/core';
import {
  Count,
  CountSchema,
  Filter,
  FilterExcludingWhere,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getModelSchemaRef,
  patch,
  put,
  del,
  requestBody,
  response,
  HttpErrors,
} from '@loopback/rest';
import {Credenciales, Usuario} from '../models';
import {UsuarioRepository} from '../repositories';
import { AutenticacionService } from '../services';
const fetch = require("node-fetch")
export class UsuarioController {
  constructor(
    @repository(UsuarioRepository)
    public usuarioRepository : UsuarioRepository,
    @service(AutenticacionService)
    public autenticacionService : AutenticacionService
  ) {}

  @post('/identificarUsuario',
  {
    responses:{
      '200':{ description: 'Identificación correcta'}
    }
  })
  async identificarUsuario(
    @requestBody() credenciales : Credenciales
  )
  {
    let u = await this.autenticacionService.IdentificarUsuario(credenciales.usuario,credenciales.contrasena)
    if(u)
    {
      let token = this.autenticacionService.GenerarTokenJWT(u);
      return {
        datos : {
          nombre : u.nombre + " " + u.apellido,
          correo : u.correo,
          id : u.id,
          rol : u.rol
        },
        tk : token
      }
    }else{
      throw new HttpErrors.Unauthorized("Credenciales incorrectas")
    }
  }

  @post('/usuarios')
  @response(200, {
    description: 'Usuario model instance',
    content: {'application/json': {schema: getModelSchemaRef(Usuario)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Usuario, {
            title: 'NewUsuario',
            exclude: ['id'],
          }),
        },
      },
    })
    usuario: Omit<Usuario, 'id'>,
  ): Promise<Usuario> {
    
    //Generar la clave
    let clave = this.autenticacionService.GenerarClave();
    //Encriptarla
    let claveCifrada = this.autenticacionService.CifrarClave(clave)
    // Asignar la clave al nuevo usuario
    usuario.contrasena = claveCifrada
    // Guardar el usuario en base de datos
    let u = await this.usuarioRepository.create(usuario);
    // Preparar correo para el usuario
    let contenido = "ABOGADOS APP. Se te ha creado una cuenta en el sistema " 
    + usuario.nombre + ". Tu clave es: " + clave;
    let asunto = "Se creó exitosamente tu cuenta";
    let destino = usuario.correo;
    // Enviar correo
    fetch("http://127.0.0.1:5000/correo?cuerpo_correo="+contenido+"&correo_destino="+destino+"&asunto_correo="+asunto)
    .then((data : any) => {
      console.log(data);
    });
    // Retornamos el usuario creado
    return u;
  }

  @get('/usuarios/count')
  @response(200, {
    description: 'Usuario model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(Usuario) where?: Where<Usuario>,
  ): Promise<Count> {
    return this.usuarioRepository.count(where);
  }
  
  @authenticate('abogado')
  @get('/usuarios')
  @response(200, {
    description: 'Array of Usuario model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Usuario, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Usuario) filter?: Filter<Usuario>,
  ): Promise<Usuario[]> {
    return this.usuarioRepository.find(filter);
  }

  @patch('/usuarios')
  @response(200, {
    description: 'Usuario PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Usuario, {partial: true}),
        },
      },
    })
    usuario: Usuario,
    @param.where(Usuario) where?: Where<Usuario>,
  ): Promise<Count> {
    return this.usuarioRepository.updateAll(usuario, where);
  }

  @get('/usuarios/{id}')
  @response(200, {
    description: 'Usuario model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Usuario, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.string('id') id: string,
    @param.filter(Usuario, {exclude: 'where'}) filter?: FilterExcludingWhere<Usuario>
  ): Promise<Usuario> {
    return this.usuarioRepository.findById(id, filter);
  }

  @patch('/usuarios/{id}')
  @response(204, {
    description: 'Usuario PATCH success',
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Usuario, {partial: true}),
        },
      },
    })
    usuario: Usuario,
  ): Promise<void> {
    await this.usuarioRepository.updateById(id, usuario);
  }

  @put('/usuarios/{id}')
  @response(204, {
    description: 'Usuario PUT success',
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() usuario: Usuario,
  ): Promise<void> {
    await this.usuarioRepository.replaceById(id, usuario);
  }

  @del('/usuarios/{id}')
  @response(204, {
    description: 'Usuario DELETE success',
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.usuarioRepository.deleteById(id);
  }
}
