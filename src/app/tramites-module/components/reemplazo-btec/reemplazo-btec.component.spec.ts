import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReemplazoBtecComponent } from './reemplazo-btec.component';

describe('ReemplazoBtecComponent', () => {
  let component: ReemplazoBtecComponent;
  let fixture: ComponentFixture<ReemplazoBtecComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReemplazoBtecComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReemplazoBtecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
