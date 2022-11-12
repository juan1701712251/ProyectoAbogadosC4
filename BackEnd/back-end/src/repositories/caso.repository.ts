import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, BelongsToAccessor} from '@loopback/repository';
import {MongodbDataSource} from '../datasources';
import {Caso, CasoRelations, FaseCaso, Usuario} from '../models';
import {FaseCasoRepository} from './fase-caso.repository';
import {UsuarioRepository} from './usuario.repository';

export class CasoRepository extends DefaultCrudRepository<
  Caso,
  typeof Caso.prototype.id,
  CasoRelations
> {

  public readonly faseCaso: BelongsToAccessor<FaseCaso, typeof Caso.prototype.id>;

  public readonly abogado: BelongsToAccessor<Usuario, typeof Caso.prototype.id>;

  public readonly cliente: BelongsToAccessor<Usuario, typeof Caso.prototype.id>;

  constructor(
    @inject('datasources.mongodb') dataSource: MongodbDataSource, @repository.getter('FaseCasoRepository') protected faseCasoRepositoryGetter: Getter<FaseCasoRepository>, @repository.getter('UsuarioRepository') protected usuarioRepositoryGetter: Getter<UsuarioRepository>,
  ) {
    super(Caso, dataSource);
    this.cliente = this.createBelongsToAccessorFor('cliente', usuarioRepositoryGetter,);
    this.registerInclusionResolver('cliente', this.cliente.inclusionResolver);
    this.abogado = this.createBelongsToAccessorFor('abogado', usuarioRepositoryGetter,);
    this.registerInclusionResolver('abogado', this.abogado.inclusionResolver);
    this.faseCaso = this.createBelongsToAccessorFor('faseCaso', faseCasoRepositoryGetter,);
    this.registerInclusionResolver('faseCaso', this.faseCaso.inclusionResolver);
  }
}
