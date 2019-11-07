import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalhesHistoricoConsumoPage } from './detalhes-historico-consumo.page';

describe('DetalhesHistoricoConsumoPage', () => {
  let component: DetalhesHistoricoConsumoPage;
  let fixture: ComponentFixture<DetalhesHistoricoConsumoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetalhesHistoricoConsumoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalhesHistoricoConsumoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
