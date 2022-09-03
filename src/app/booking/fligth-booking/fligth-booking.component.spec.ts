import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FligthBookingComponent } from './fligth-booking.component';

describe('FligthBookingComponent', () => {
  let component: FligthBookingComponent;
  let fixture: ComponentFixture<FligthBookingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FligthBookingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FligthBookingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
