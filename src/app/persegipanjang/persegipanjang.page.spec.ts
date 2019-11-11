import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersegipanjangPage } from './persegipanjang.page';

describe('PersegipanjangPage', () => {
  let component: PersegipanjangPage;
  let fixture: ComponentFixture<PersegipanjangPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersegipanjangPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersegipanjangPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
