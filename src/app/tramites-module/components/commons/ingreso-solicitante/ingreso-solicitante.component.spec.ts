import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IngresoSolicitanteComponent } from './ingreso-solicitante.component';

describe('IngresoSolicitanteComponent', () => {
  let component: IngresoSolicitanteComponent;
  let fixture: ComponentFixture<IngresoSolicitanteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IngresoSolicitanteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IngresoSolicitanteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
