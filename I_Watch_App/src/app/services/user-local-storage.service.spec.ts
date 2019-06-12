import { TestBed } from '@angular/core/testing';

import { UserLocalStorageService } from './user-local-storage.service';

describe('UserLocalStorageService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UserLocalStorageService = TestBed.get(UserLocalStorageService);
    expect(service).toBeTruthy();
  });
});
