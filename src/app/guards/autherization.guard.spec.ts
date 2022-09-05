import { TestBed } from '@angular/core/testing';

import { AutherizationGuard } from './autherization.guard';

describe('AutherizationGuard', () => {
  let guard: AutherizationGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AutherizationGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
