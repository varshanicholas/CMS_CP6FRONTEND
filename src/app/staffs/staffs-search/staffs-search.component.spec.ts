import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StaffsSearchComponent } from './staffs-search.component';

describe('StaffsSearchComponent', () => {
  let component: StaffsSearchComponent;
  let fixture: ComponentFixture<StaffsSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StaffsSearchComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StaffsSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
