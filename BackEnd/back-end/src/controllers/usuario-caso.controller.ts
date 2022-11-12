import {
  Count,
  CountSchema,
  Filter,
  repository,
  Where,
} from '@loopback/repository';
import {
  del,
  get,
  getModelSchemaRef,
  getWhereSchemaFor,
  param,
  patch,
  post,
  requestBody,
} from '@loopback/rest';
import {
  Usuario,
  Caso,
} from '../models';
import {UsuarioRepository} from '../repositories';

export class UsuarioCasoController {
  constructor(
    @repository(UsuarioRepository) protected usuarioRepository: UsuarioRepository,
  ) { }

  @get('/usuarios/{id}/casos', {
    responses: {
      '200': {
        description: 'Array of Usuario has many Caso',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Caso)},
          },
        },
      },
    },
  })
  async find(
    @param.path.string('id') id: string,
    @param.query.object('filter') filter?: Filter<Caso>,
  ): Promise<Caso[]> {
    return this.usuarioRepository.casosCliente(id).find(filter);
  }

  @post('/usuarios/{id}/casos', {
    responses: {
      '200': {
        description: 'Usuario model instance',
        content: {'application/json': {schema: getModelSchemaRef(Caso)}},
      },
    },
  })
  async create(
    @param.path.string('id') id: typeof Usuario.prototype.id,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Caso, {
            title: 'NewCasoInUsuario',
            exclude: ['id'],
            optional: ['clienteId']
          }),
        },
      },
    }) caso: Omit<Caso, 'id'>,
  ): Promise<Caso> {
    return this.usuarioRepository.casosCliente(id).create(caso);
  }

  @patch('/usuarios/{id}/casos', {
    responses: {
      '200': {
        description: 'Usuario.Caso PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async patch(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Caso, {partial: true}),
        },
      },
    })
    caso: Partial<Caso>,
    @param.query.object('where', getWhereSchemaFor(Caso)) where?: Where<Caso>,
  ): Promise<Count> {
    return this.usuarioRepository.casosCliente(id).patch(caso, where);
  }

  @del('/usuarios/{id}/casos', {
    responses: {
      '200': {
        description: 'Usuario.Caso DELETE success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async delete(
    @param.path.string('id') id: string,
    @param.query.object('where', getWhereSchemaFor(Caso)) where?: Where<Caso>,
  ): Promise<Count> {
    return this.usuarioRepository.casosCliente(id).delete(where);
  }
}
