import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscarCasoComponent } from './buscar-caso.component';

describe('BuscarCasoComponent', () => {
  let component: BuscarCasoComponent;
  let fixture: ComponentFixture<BuscarCasoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuscarCasoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BuscarCasoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
