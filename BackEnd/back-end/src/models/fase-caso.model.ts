import {Entity, model, property} from '@loopback/repository';

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


  constructor(data?: Partial<FaseCaso>) {
    super(data);
  }
}

export interface FaseCasoRelations {
  // describe navigational properties here
}

export type FaseCasoWithRelations = FaseCaso & FaseCasoRelations;
