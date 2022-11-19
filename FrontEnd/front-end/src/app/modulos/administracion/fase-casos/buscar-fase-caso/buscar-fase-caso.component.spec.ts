import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscarFaseCasoComponent } from './buscar-fase-caso.component';

describe('BuscarFaseCasoComponent', () => {
  let component: BuscarFaseCasoComponent;
  let fixture: ComponentFixture<BuscarFaseCasoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuscarFaseCasoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BuscarFaseCasoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
