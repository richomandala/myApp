import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BelahketupatPage } from './belahketupat.page';

describe('BelahketupatPage', () => {
  let component: BelahketupatPage;
  let fixture: ComponentFixture<BelahketupatPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BelahketupatPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BelahketupatPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
