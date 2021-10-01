import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientsVerifiedComponent } from './clients-verified.component';

describe('ClientsVerifiedComponent', () => {
  let component: ClientsVerifiedComponent;
  let fixture: ComponentFixture<ClientsVerifiedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientsVerifiedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientsVerifiedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
