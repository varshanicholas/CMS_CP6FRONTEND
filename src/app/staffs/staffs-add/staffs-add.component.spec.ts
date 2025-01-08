import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StaffsAddComponent } from './staffs-add.component';

describe('StaffsAddComponent', () => {
  let component: StaffsAddComponent;
  let fixture: ComponentFixture<StaffsAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StaffsAddComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StaffsAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
