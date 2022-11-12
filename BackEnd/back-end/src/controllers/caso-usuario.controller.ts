import {
  repository,
} from '@loopback/repository';
import {
  param,
  get,
  getModelSchemaRef,
} from '@loopback/rest';
import {
  Caso,
  Usuario,
} from '../models';
import {CasoRepository} from '../repositories';

export class CasoUsuarioController {
  constructor(
    @repository(CasoRepository)
    public casoRepository: CasoRepository,
  ) { }

  @get('/casos/{id}/usuario', {
    responses: {
      '200': {
        description: 'Usuario belonging to Caso',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Usuario)},
          },
        },
      },
    },
  })
  async getUsuario(
    @param.path.string('id') id: typeof Caso.prototype.id,
  ): Promise<Usuario> {
    return this.casoRepository.cliente(id);
  }
}
