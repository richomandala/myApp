import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LayanglayangPage } from './layanglayang.page';

describe('LayanglayangPage', () => {
  let component: LayanglayangPage;
  let fixture: ComponentFixture<LayanglayangPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LayanglayangPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LayanglayangPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
