import { TestBed } from '@angular/core/testing';

import { CabsDataService } from './cabs-data.service';

describe('CabsDataService', () => {
  let service: CabsDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CabsDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
