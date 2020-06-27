import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IngresoConductoresComponent } from './ingreso-conductores.component';

describe('IngresoConductoresComponent', () => {
  let component: IngresoConductoresComponent;
  let fixture: ComponentFixture<IngresoConductoresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IngresoConductoresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IngresoConductoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
