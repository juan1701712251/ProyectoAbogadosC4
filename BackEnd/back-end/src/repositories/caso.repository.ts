import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {MongodbDataSource} from '../datasources';
import {Caso, CasoRelations} from '../models';

export class CasoRepository extends DefaultCrudRepository<
  Caso,
  typeof Caso.prototype.id,
  CasoRelations
> {
  constructor(
    @inject('datasources.mongodb') dataSource: MongodbDataSource,
  ) {
    super(Caso, dataSource);
  }
}
