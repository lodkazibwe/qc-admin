import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DateTransactionsComponent } from './date-transactions.component';

describe('DateTransactionsComponent', () => {
  let component: DateTransactionsComponent;
  let fixture: ComponentFixture<DateTransactionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DateTransactionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DateTransactionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
