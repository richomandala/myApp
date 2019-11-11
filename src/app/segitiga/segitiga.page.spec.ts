import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SegitigaPage } from './segitiga.page';

describe('SegitigaPage', () => {
  let component: SegitigaPage;
  let fixture: ComponentFixture<SegitigaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SegitigaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SegitigaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
