import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IngresoPersonasComponent } from './ingreso-personas.component';

describe('IngresoPersonasComponent', () => {
  let component: IngresoPersonasComponent;
  let fixture: ComponentFixture<IngresoPersonasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IngresoPersonasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IngresoPersonasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
