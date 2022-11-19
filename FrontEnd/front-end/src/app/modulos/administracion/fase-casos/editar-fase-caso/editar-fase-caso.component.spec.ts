import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarFaseCasoComponent } from './editar-fase-caso.component';

describe('EditarFaseCasoComponent', () => {
  let component: EditarFaseCasoComponent;
  let fixture: ComponentFixture<EditarFaseCasoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarFaseCasoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarFaseCasoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
