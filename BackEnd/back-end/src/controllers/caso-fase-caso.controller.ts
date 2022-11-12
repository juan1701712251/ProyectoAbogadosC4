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
  FaseCaso,
} from '../models';
import {CasoRepository} from '../repositories';

export class CasoFaseCasoController {
  constructor(
    @repository(CasoRepository)
    public casoRepository: CasoRepository,
  ) { }

  @get('/casos/{id}/fase-caso', {
    responses: {
      '200': {
        description: 'FaseCaso belonging to Caso',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(FaseCaso)},
          },
        },
      },
    },
  })
  async getFaseCaso(
    @param.path.string('id') id: typeof Caso.prototype.id,
  ): Promise<FaseCaso> {
    return this.casoRepository.faseCaso(id);
  }
}
