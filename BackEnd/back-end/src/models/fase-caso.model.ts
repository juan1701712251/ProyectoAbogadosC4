import {Entity, model, property, hasMany} from '@loopback/repository';
import {Caso} from './caso.model';

@model()
export class FaseCaso extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  id?: string;

  @property({
    type: 'string',
    required: true,
  })
  nombreFase: string;

  @property({
    type: 'string',
    required: true,
  })
  descripcion: string;

  @hasMany(() => Caso)
  casos: Caso[];

  constructor(data?: Partial<FaseCaso>) {
    super(data);
  }
}

export interface FaseCasoRelations {
  // describe navigational properties here
}

export type FaseCasoWithRelations = FaseCaso & FaseCasoRelations;
