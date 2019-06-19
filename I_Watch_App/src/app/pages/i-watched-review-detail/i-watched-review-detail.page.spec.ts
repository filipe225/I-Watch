import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IWatchedReviewDetailPage } from './i-watched-review-detail.page';

describe('IWatchedReviewDetailPage', () => {
  let component: IWatchedReviewDetailPage;
  let fixture: ComponentFixture<IWatchedReviewDetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IWatchedReviewDetailPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IWatchedReviewDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
