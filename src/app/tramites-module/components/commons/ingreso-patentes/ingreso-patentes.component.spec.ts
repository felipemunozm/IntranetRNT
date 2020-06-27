import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IngresoPatentesComponent } from './ingreso-patentes.component';

describe('IngresoPatentesComponent', () => {
  let component: IngresoPatentesComponent;
  let fixture: ComponentFixture<IngresoPatentesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IngresoPatentesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IngresoPatentesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
