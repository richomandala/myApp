import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BangundatarPage } from './bangundatar.page';

describe('BangundatarPage', () => {
  let component: BangundatarPage;
  let fixture: ComponentFixture<BangundatarPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BangundatarPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BangundatarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
