import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VerifiedLoansComponent } from './verified-loans.component';

describe('VerifiedLoansComponent', () => {
  let component: VerifiedLoansComponent;
  let fixture: ComponentFixture<VerifiedLoansComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerifiedLoansComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VerifiedLoansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
