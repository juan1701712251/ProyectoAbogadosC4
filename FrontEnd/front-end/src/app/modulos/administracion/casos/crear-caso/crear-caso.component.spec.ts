import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearCasoComponent } from './crear-caso.component';

describe('CrearCasoComponent', () => {
  let component: CrearCasoComponent;
  let fixture: ComponentFixture<CrearCasoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearCasoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearCasoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
