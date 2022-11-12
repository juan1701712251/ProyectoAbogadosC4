import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {MongodbDataSource} from '../datasources';
import {FaseCaso, FaseCasoRelations} from '../models';

export class FaseCasoRepository extends DefaultCrudRepository<
  FaseCaso,
  typeof FaseCaso.prototype.id,
  FaseCasoRelations
> {
  constructor(
    @inject('datasources.mongodb') dataSource: MongodbDataSource,
  ) {
    super(FaseCaso, dataSource);
  }
}
