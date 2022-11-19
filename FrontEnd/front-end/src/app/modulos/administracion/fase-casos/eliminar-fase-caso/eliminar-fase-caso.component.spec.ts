import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EliminarFaseCasoComponent } from './eliminar-fase-caso.component';

describe('EliminarFaseCasoComponent', () => {
  let component: EliminarFaseCasoComponent;
  let fixture: ComponentFixture<EliminarFaseCasoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EliminarFaseCasoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EliminarFaseCasoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
