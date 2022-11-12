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
  FaseCaso,
  Caso,
} from '../models';
import {FaseCasoRepository} from '../repositories';

export class FaseCasoCasoController {
  constructor(
    @repository(FaseCasoRepository) protected faseCasoRepository: FaseCasoRepository,
  ) { }

  @get('/fase-casos/{id}/casos', {
    responses: {
      '200': {
        description: 'Array of FaseCaso has many Caso',
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
    return this.faseCasoRepository.casos(id).find(filter);
  }

  @post('/fase-casos/{id}/casos', {
    responses: {
      '200': {
        description: 'FaseCaso model instance',
        content: {'application/json': {schema: getModelSchemaRef(Caso)}},
      },
    },
  })
  async create(
    @param.path.string('id') id: typeof FaseCaso.prototype.id,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Caso, {
            title: 'NewCasoInFaseCaso',
            exclude: ['id'],
            optional: ['faseCasoId']
          }),
        },
      },
    }) caso: Omit<Caso, 'id'>,
  ): Promise<Caso> {
    return this.faseCasoRepository.casos(id).create(caso);
  }

  @patch('/fase-casos/{id}/casos', {
    responses: {
      '200': {
        description: 'FaseCaso.Caso PATCH success count',
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
    return this.faseCasoRepository.casos(id).patch(caso, where);
  }

  @del('/fase-casos/{id}/casos', {
    responses: {
      '200': {
        description: 'FaseCaso.Caso DELETE success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async delete(
    @param.path.string('id') id: string,
    @param.query.object('where', getWhereSchemaFor(Caso)) where?: Where<Caso>,
  ): Promise<Count> {
    return this.faseCasoRepository.casos(id).delete(where);
  }
}
