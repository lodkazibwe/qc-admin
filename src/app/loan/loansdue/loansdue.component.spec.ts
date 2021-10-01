import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoansdueComponent } from './loansdue.component';

describe('LoansdueComponent', () => {
  let component: LoansdueComponent;
  let fixture: ComponentFixture<LoansdueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoansdueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoansdueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
