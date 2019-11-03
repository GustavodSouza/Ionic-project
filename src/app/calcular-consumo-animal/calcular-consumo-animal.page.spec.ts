import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalcularConsumoAnimalPage } from './calcular-consumo-animal.page';

describe('CalcularConsumoAnimalPage', () => {
  let component: CalcularConsumoAnimalPage;
  let fixture: ComponentFixture<CalcularConsumoAnimalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalcularConsumoAnimalPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalcularConsumoAnimalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
