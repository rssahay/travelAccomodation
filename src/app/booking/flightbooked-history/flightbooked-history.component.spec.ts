import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlightbookedHistoryComponent } from './flightbooked-history.component';

describe('FlightbookedHistoryComponent', () => {
  let component: FlightbookedHistoryComponent;
  let fixture: ComponentFixture<FlightbookedHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlightbookedHistoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FlightbookedHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
