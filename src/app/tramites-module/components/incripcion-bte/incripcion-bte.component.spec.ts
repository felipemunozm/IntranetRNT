import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IncripcionBteComponent } from './incripcion-bte.component';

describe('IncripcionBteComponent', () => {
  let component: IncripcionBteComponent;
  let fixture: ComponentFixture<IncripcionBteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IncripcionBteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IncripcionBteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
