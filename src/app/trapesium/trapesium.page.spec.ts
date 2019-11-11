import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrapesiumPage } from './trapesium.page';

describe('TrapesiumPage', () => {
  let component: TrapesiumPage;
  let fixture: ComponentFixture<TrapesiumPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrapesiumPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrapesiumPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
