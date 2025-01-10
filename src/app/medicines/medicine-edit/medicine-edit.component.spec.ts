
// import { ComponentFixture, TestBed } from '@angular/core/testing';

// import { MedicinesEditComponent } from './medicines-edit.component';

// describe('MedicinesEditComponent', () => {
//   let component: MedicinesEditComponent;
//   let fixture: ComponentFixture<MedicinesEditComponent>;

//   beforeEach(async () => {
//     await TestBed.configureTestingModule({
//       imports: [MedicinesEditComponent]
//     })
//     .compileComponents();

//     fixture = TestBed.createComponent(MedicinesEditComponent);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   });

//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });
// });

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicineEditComponent } from './medicine-edit.component';

describe('MedicineEditComponent', () => {
  let component: MedicineEditComponent;
  let fixture: ComponentFixture<MedicineEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MedicineEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MedicineEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

