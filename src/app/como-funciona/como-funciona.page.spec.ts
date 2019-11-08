import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComoFuncionaPage } from './como-funciona.page';

describe('ComoFuncionaPage', () => {
  let component: ComoFuncionaPage;
  let fixture: ComponentFixture<ComoFuncionaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComoFuncionaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComoFuncionaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
