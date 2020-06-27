import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidarPersonaServicioComponent } from './validar-persona-servicio.component';

describe('ValidarPersonaServicioComponent', () => {
  let component: ValidarPersonaServicioComponent;
  let fixture: ComponentFixture<ValidarPersonaServicioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ValidarPersonaServicioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ValidarPersonaServicioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
