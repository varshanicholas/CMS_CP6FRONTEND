import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PharmasistdashComponent } from './pharmasistdash.component';

describe('PharmasistdashComponent', () => {
  let component: PharmasistdashComponent;
  let fixture: ComponentFixture<PharmasistdashComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PharmasistdashComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PharmasistdashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
