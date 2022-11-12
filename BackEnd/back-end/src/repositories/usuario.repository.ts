import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, HasManyRepositoryFactory} from '@loopback/repository';
import {MongodbDataSource} from '../datasources';
import {Usuario, UsuarioRelations, Caso} from '../models';
import {CasoRepository} from './caso.repository';

export class UsuarioRepository extends DefaultCrudRepository<
  Usuario,
  typeof Usuario.prototype.id,
  UsuarioRelations
> {

  public readonly casos: HasManyRepositoryFactory<Caso, typeof Usuario.prototype.id>;

  public readonly casosCliente: HasManyRepositoryFactory<Caso, typeof Usuario.prototype.id>;

  constructor(
    @inject('datasources.mongodb') dataSource: MongodbDataSource, @repository.getter('CasoRepository') protected casoRepositoryGetter: Getter<CasoRepository>,
  ) {
    super(Usuario, dataSource);
    this.casosCliente = this.createHasManyRepositoryFactoryFor('casosCliente', casoRepositoryGetter,);
    this.registerInclusionResolver('casosCliente', this.casosCliente.inclusionResolver);
    this.casos = this.createHasManyRepositoryFactoryFor('casos', casoRepositoryGetter,);
    this.registerInclusionResolver('casos', this.casos.inclusionResolver);
  }
}
