import {Entity, model, property} from '@loopback/repository';

@model()
export class Caso extends Entity {
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
  fechaInicioCaso: string;

  @property({
    type: 'string',
    required: true,
  })
  descripcion: string;

  @property({
    type: 'number',
    required: true,
  })
  cantidadTestigos: number;

  @property({
    type: 'string',
    required: true,
  })
  direccionJuzgadoAsignado: string;


  constructor(data?: Partial<Caso>) {
    super(data);
  }
}

export interface CasoRelations {
  // describe navigational properties here
}

export type CasoWithRelations = Caso & CasoRelations;
