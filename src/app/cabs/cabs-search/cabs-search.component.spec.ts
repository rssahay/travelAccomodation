import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CabsSearchComponent } from './cabs-search.component';

describe('CabsSearchComponent', () => {
  let component: CabsSearchComponent;
  let fixture: ComponentFixture<CabsSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CabsSearchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CabsSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
