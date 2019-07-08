import { TestBed } from '@angular/core/testing';

import { UserMainServiceService } from './user-main-service.service';

describe('UserMainServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UserMainServiceService = TestBed.get(UserMainServiceService);
    expect(service).toBeTruthy();
  });
});
