import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SyncDataPage } from './sync-data.page';

describe('SyncDataPage', () => {
  let component: SyncDataPage;
  let fixture: ComponentFixture<SyncDataPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SyncDataPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SyncDataPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
