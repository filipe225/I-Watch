import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNewItemPage } from './add-new-item.page';

describe('AddNewItemPage', () => {
  let component: AddNewItemPage;
  let fixture: ComponentFixture<AddNewItemPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddNewItemPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddNewItemPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
