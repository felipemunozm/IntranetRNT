import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IngresoAdultosComponent } from './ingreso-adultos.component';

describe('IngresoAdultosComponent', () => {
  let component: IngresoAdultosComponent;
  let fixture: ComponentFixture<IngresoAdultosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IngresoAdultosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IngresoAdultosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
