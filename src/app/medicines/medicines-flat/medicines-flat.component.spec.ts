import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicinesFlatComponent } from './medicines-flat.component';

describe('MedicinesFlatComponent', () => {
  let component: MedicinesFlatComponent;
  let fixture: ComponentFixture<MedicinesFlatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MedicinesFlatComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MedicinesFlatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
