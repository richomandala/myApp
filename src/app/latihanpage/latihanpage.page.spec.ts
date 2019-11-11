import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LatihanpagePage } from './latihanpage.page';

describe('LatihanpagePage', () => {
  let component: LatihanpagePage;
  let fixture: ComponentFixture<LatihanpagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LatihanpagePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LatihanpagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
