import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainTramitesComponent } from './main-tramites.component';

describe('MainTramitesComponent', () => {
  let component: MainTramitesComponent;
  let fixture: ComponentFixture<MainTramitesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainTramitesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainTramitesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
