import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientsPendingComponent } from './clients-pending.component';

describe('ClientsPendingComponent', () => {
  let component: ClientsPendingComponent;
  let fixture: ComponentFixture<ClientsPendingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientsPendingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientsPendingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
