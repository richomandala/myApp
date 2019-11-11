import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersegiPage } from './persegi.page';

describe('PersegiPage', () => {
  let component: PersegiPage;
  let fixture: ComponentFixture<PersegiPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersegiPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersegiPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
