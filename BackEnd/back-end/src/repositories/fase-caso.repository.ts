import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, HasManyRepositoryFactory} from '@loopback/repository';
import {MongodbDataSource} from '../datasources';
import {FaseCaso, FaseCasoRelations, Caso} from '../models';
import {CasoRepository} from './caso.repository';

export class FaseCasoRepository extends DefaultCrudRepository<
  FaseCaso,
  typeof FaseCaso.prototype.id,
  FaseCasoRelations
> {

  public readonly casos: HasManyRepositoryFactory<Caso, typeof FaseCaso.prototype.id>;

  constructor(
    @inject('datasources.mongodb') dataSource: MongodbDataSource, @repository.getter('CasoRepository') protected casoRepositoryGetter: Getter<CasoRepository>,
  ) {
    super(FaseCaso, dataSource);
    this.casos = this.createHasManyRepositoryFactoryFor('casos', casoRepositoryGetter,);
    this.registerInclusionResolver('casos', this.casos.inclusionResolver);
  }
}
