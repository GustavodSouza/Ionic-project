import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalcularPiquetePage } from './calcular-piquete.page';

describe('CalcularPiquetePage', () => {
  let component: CalcularPiquetePage;
  let fixture: ComponentFixture<CalcularPiquetePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalcularPiquetePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalcularPiquetePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
