import { authenticate } from '@loopback/authentication';
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
import {FaseCaso} from '../models';
import {FaseCasoRepository} from '../repositories';

@authenticate('abogado')
export class FaseCasoController {
  constructor(
    @repository(FaseCasoRepository)
    public faseCasoRepository : FaseCasoRepository,
  ) {}

  @post('/fase-casos')
  @response(200, {
    description: 'FaseCaso model instance',
    content: {'application/json': {schema: getModelSchemaRef(FaseCaso)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(FaseCaso, {
            title: 'NewFaseCaso',
            exclude: ['id'],
          }),
        },
      },
    })
    faseCaso: Omit<FaseCaso, 'id'>,
  ): Promise<FaseCaso> {
    return this.faseCasoRepository.create(faseCaso);
  }

  @get('/fase-casos/count')
  @response(200, {
    description: 'FaseCaso model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(FaseCaso) where?: Where<FaseCaso>,
  ): Promise<Count> {
    return this.faseCasoRepository.count(where);
  }

  @get('/fase-casos')
  @response(200, {
    description: 'Array of FaseCaso model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(FaseCaso, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(FaseCaso) filter?: Filter<FaseCaso>,
  ): Promise<FaseCaso[]> {
    return this.faseCasoRepository.find(filter);
  }

  @patch('/fase-casos')
  @response(200, {
    description: 'FaseCaso PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(FaseCaso, {partial: true}),
        },
      },
    })
    faseCaso: FaseCaso,
    @param.where(FaseCaso) where?: Where<FaseCaso>,
  ): Promise<Count> {
    return this.faseCasoRepository.updateAll(faseCaso, where);
  }

  @get('/fase-casos/{id}')
  @response(200, {
    description: 'FaseCaso model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(FaseCaso, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.string('id') id: string,
    @param.filter(FaseCaso, {exclude: 'where'}) filter?: FilterExcludingWhere<FaseCaso>
  ): Promise<FaseCaso> {
    return this.faseCasoRepository.findById(id, filter);
  }

  @patch('/fase-casos/{id}')
  @response(204, {
    description: 'FaseCaso PATCH success',
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(FaseCaso, {partial: true}),
        },
      },
    })
    faseCaso: FaseCaso,
  ): Promise<void> {
    await this.faseCasoRepository.updateById(id, faseCaso);
  }

  @put('/fase-casos/{id}')
  @response(204, {
    description: 'FaseCaso PUT success',
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() faseCaso: FaseCaso,
  ): Promise<void> {
    await this.faseCasoRepository.replaceById(id, faseCaso);
  }

  @del('/fase-casos/{id}')
  @response(204, {
    description: 'FaseCaso DELETE success',
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.faseCasoRepository.deleteById(id);
  }
}
