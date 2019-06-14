import { TestBed } from '@angular/core/testing';

import { TodosStoreService } from './todos-store.service';

describe('TodosStoreService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TodosStoreService = TestBed.get(TodosStoreService);
    expect(service).toBeTruthy();
  });
});
