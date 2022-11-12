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
} from '@loopback/rest';
import {Caso} from '../models';
import {CasoRepository} from '../repositories';

export class CasoController {
  constructor(
    @repository(CasoRepository)
    public casoRepository : CasoRepository,
  ) {}

  @post('/casos')
  @response(200, {
    description: 'Caso model instance',
    content: {'application/json': {schema: getModelSchemaRef(Caso)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Caso, {
            title: 'NewCaso',
            exclude: ['id'],
          }),
        },
      },
    })
    caso: Omit<Caso, 'id'>,
  ): Promise<Caso> {
    return this.casoRepository.create(caso);
  }

  @get('/casos/count')
  @response(200, {
    description: 'Caso model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(Caso) where?: Where<Caso>,
  ): Promise<Count> {
    return this.casoRepository.count(where);
  }

  @get('/casos')
  @response(200, {
    description: 'Array of Caso model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Caso, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Caso) filter?: Filter<Caso>,
  ): Promise<Caso[]> {
    return this.casoRepository.find(filter);
  }

  @patch('/casos')
  @response(200, {
    description: 'Caso PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Caso, {partial: true}),
        },
      },
    })
    caso: Caso,
    @param.where(Caso) where?: Where<Caso>,
  ): Promise<Count> {
    return this.casoRepository.updateAll(caso, where);
  }

  @get('/casos/{id}')
  @response(200, {
    description: 'Caso model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Caso, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.string('id') id: string,
    @param.filter(Caso, {exclude: 'where'}) filter?: FilterExcludingWhere<Caso>
  ): Promise<Caso> {
    return this.casoRepository.findById(id, filter);
  }

  @patch('/casos/{id}')
  @response(204, {
    description: 'Caso PATCH success',
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Caso, {partial: true}),
        },
      },
    })
    caso: Caso,
  ): Promise<void> {
    await this.casoRepository.updateById(id, caso);
  }

  @put('/casos/{id}')
  @response(204, {
    description: 'Caso PUT success',
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() caso: Caso,
  ): Promise<void> {
    await this.casoRepository.replaceById(id, caso);
  }

  @del('/casos/{id}')
  @response(204, {
    description: 'Caso DELETE success',
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.casoRepository.deleteById(id);
  }
}
