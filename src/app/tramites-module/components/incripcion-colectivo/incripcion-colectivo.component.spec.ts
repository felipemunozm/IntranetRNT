import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IncripcionColectivoComponent } from './incripcion-colectivo.component';

describe('IncripcionColectivoComponent', () => {
  let component: IncripcionColectivoComponent;
  let fixture: ComponentFixture<IncripcionColectivoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IncripcionColectivoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IncripcionColectivoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
