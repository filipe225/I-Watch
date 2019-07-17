import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FriendIWatchedListPage } from './friend-i-watched-list.page';

describe('FriendIWatchedListPage', () => {
  let component: FriendIWatchedListPage;
  let fixture: ComponentFixture<FriendIWatchedListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FriendIWatchedListPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FriendIWatchedListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
