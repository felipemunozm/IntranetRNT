import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IngresoFlotaComponent } from './ingreso-flota.component';

describe('IngresoFlotaComponent', () => {
  let component: IngresoFlotaComponent;
  let fixture: ComponentFixture<IngresoFlotaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IngresoFlotaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IngresoFlotaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
