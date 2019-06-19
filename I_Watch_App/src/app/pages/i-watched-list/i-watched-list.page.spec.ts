import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IWatchedListPage } from './i-watched-list.page';

describe('IWatchedListPage', () => {
  let component: IWatchedListPage;
  let fixture: ComponentFixture<IWatchedListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IWatchedListPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IWatchedListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
