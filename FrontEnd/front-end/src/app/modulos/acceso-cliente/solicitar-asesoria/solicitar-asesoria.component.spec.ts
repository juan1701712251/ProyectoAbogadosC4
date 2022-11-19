import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolicitarAsesoriaComponent } from './solicitar-asesoria.component';

describe('SolicitarAsesoriaComponent', () => {
  let component: SolicitarAsesoriaComponent;
  let fixture: ComponentFixture<SolicitarAsesoriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SolicitarAsesoriaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SolicitarAsesoriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
