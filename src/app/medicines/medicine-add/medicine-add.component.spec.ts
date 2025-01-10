
// import { ComponentFixture, TestBed } from '@angular/core/testing';

// import { MedicinesAddComponent } from './medicines-add.component';

// describe('MedicinesAddComponent', () => {
//   let component: MedicinesAddComponent;
//   let fixture: ComponentFixture<MedicinesAddComponent>;

//   beforeEach(async () => {
//     await TestBed.configureTestingModule({
//       imports: [MedicinesAddComponent]
//     })
//     .compileComponents();

//     fixture = TestBed.createComponent(MedicinesAddComponent);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   });

//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });
// });

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicineAddComponent } from './medicine-add.component';

describe('MedicineAddComponent', () => {
  let component: MedicineAddComponent;
  let fixture: ComponentFixture<MedicineAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MedicineAddComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MedicineAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

