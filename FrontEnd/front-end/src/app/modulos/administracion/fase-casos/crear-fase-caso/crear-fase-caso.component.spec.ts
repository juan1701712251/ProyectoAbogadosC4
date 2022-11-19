import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearFaseCasoComponent } from './crear-fase-caso.component';

describe('CrearFaseCasoComponent', () => {
  let component: CrearFaseCasoComponent;
  let fixture: ComponentFixture<CrearFaseCasoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearFaseCasoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearFaseCasoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
