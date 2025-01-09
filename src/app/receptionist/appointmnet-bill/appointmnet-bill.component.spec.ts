import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppointmnetBillComponent } from './appointmnet-bill.component';

describe('AppointmnetBillComponent', () => {
  let component: AppointmnetBillComponent;
  let fixture: ComponentFixture<AppointmnetBillComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppointmnetBillComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppointmnetBillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
