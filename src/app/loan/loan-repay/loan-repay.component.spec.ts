import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoanRepayComponent } from './loan-repay.component';

describe('LoanRepayComponent', () => {
  let component: LoanRepayComponent;
  let fixture: ComponentFixture<LoanRepayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoanRepayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoanRepayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
