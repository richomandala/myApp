import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JajargenjangPage } from './jajargenjang.page';

describe('JajargenjangPage', () => {
  let component: JajargenjangPage;
  let fixture: ComponentFixture<JajargenjangPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JajargenjangPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JajargenjangPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
