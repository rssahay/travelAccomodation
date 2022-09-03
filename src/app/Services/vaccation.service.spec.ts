import { TestBed } from '@angular/core/testing';

import { VaccationService } from './vaccation.service';

describe('VaccationService', () => {
  let service: VaccationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VaccationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
