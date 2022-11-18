import {injectable, /* inject, */ BindingScope} from '@loopback/core';
import { repository } from '@loopback/repository';
import { Llaves } from '../config/Llaves';
import { Usuario } from '../models';
import { UsuarioRepository } from '../repositories';
const generator = require('password-generator')
const cryptojs = require('crypto-js')
const jwt = require('jsonwebtoken')

@injectable({scope: BindingScope.TRANSIENT})
export class AutenticacionService {
  constructor(
    @repository(UsuarioRepository)
    public usuarioRepository : UsuarioRepository
  ) {}

  // Generar clave de forma aleatoria
  GenerarClave()
  {
    return generator(10,false);
  }

  // Cifrar una clave 
  CifrarClave(clave : string)
  {
    return cryptojs.MD5(clave).toString();
  }

  // Identificar un usuario
  IdentificarUsuario(usuario : string, contrasena : string)
  {
    try{
      let u = this.usuarioRepository.findOne({
        where : {
          correo : usuario,
          contrasena : contrasena
        }
      });
      if (u){
        return u; 
      }
      else{
        return false;
      }
    }catch{
      return false;
    }
  }

  // Generar un token JWT
  GenerarTokenJWT(usuario : Usuario){
    let token = jwt.sign({
      data : {
        id : usuario.id,
        rol : usuario.rol,
        correo : usuario.correo,
        nombre : usuario.nombre + " " + usuario.apellido
      }
    },Llaves.claveJWT);
    return token;
  }

  // Verificar un token JWT
  VerificarTokenJWT(token : string)
  {
    try{
      let decodificado = jwt.verify(token,Llaves.claveJWT);
      return decodificado;
    }catch{
      return false;
    }
  }
}
