import { TestBed } from '@angular/core/testing';

import { HotelstayService } from './hotelstay.service';

describe('HotelstayService', () => {
  let service: HotelstayService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HotelstayService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
