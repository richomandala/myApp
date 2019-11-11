import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LingkaranPage } from './lingkaran.page';

describe('LingkaranPage', () => {
  let component: LingkaranPage;
  let fixture: ComponentFixture<LingkaranPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LingkaranPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LingkaranPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
