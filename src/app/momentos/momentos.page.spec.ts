import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MomentosPage } from './momentos.page';

describe('MomentosPage', () => {
  let component: MomentosPage;
  let fixture: ComponentFixture<MomentosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MomentosPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MomentosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
