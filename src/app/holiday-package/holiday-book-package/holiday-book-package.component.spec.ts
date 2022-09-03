import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HolidayBookPackageComponent } from './holiday-book-package.component';

describe('HolidayBookPackageComponent', () => {
  let component: HolidayBookPackageComponent;
  let fixture: ComponentFixture<HolidayBookPackageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HolidayBookPackageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HolidayBookPackageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
