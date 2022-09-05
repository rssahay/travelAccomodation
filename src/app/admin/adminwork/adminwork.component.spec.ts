import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminworkComponent } from './adminwork.component';

describe('AdminworkComponent', () => {
  let component: AdminworkComponent;
  let fixture: ComponentFixture<AdminworkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminworkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminworkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
