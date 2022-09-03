import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HolidaypackageSearchComponent } from './holidaypackage-search.component';

describe('HolidaypackageSearchComponent', () => {
  let component: HolidaypackageSearchComponent;
  let fixture: ComponentFixture<HolidaypackageSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HolidaypackageSearchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HolidaypackageSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
