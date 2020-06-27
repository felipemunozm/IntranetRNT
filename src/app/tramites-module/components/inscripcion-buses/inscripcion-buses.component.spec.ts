import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InscripcionBusesComponent } from './inscripcion-buses.component';

describe('InscripcionBusesComponent', () => {
  let component: InscripcionBusesComponent;
  let fixture: ComponentFixture<InscripcionBusesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InscripcionBusesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InscripcionBusesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
