import {Entity, model, property, belongsTo} from '@loopback/repository';
import {FaseCaso} from './fase-caso.model';
import {Usuario} from './usuario.model';

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

  @belongsTo(() => FaseCaso)
  faseCasoId: string;

  @belongsTo(() => Usuario)
  abogadoId: string;

  @belongsTo(() => Usuario)
  clienteId: string;

  constructor(data?: Partial<Caso>) {
    super(data);
  }
}

export interface CasoRelations {
  // describe navigational properties here
}

export type CasoWithRelations = Caso & CasoRelations;
