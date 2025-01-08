import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StaffsEditComponent } from './staffs-edit.component';

describe('StaffsEditComponent', () => {
  let component: StaffsEditComponent;
  let fixture: ComponentFixture<StaffsEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StaffsEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StaffsEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
