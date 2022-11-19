import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EliminarCasoComponent } from './eliminar-caso.component';

describe('EliminarCasoComponent', () => {
  let component: EliminarCasoComponent;
  let fixture: ComponentFixture<EliminarCasoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EliminarCasoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EliminarCasoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
