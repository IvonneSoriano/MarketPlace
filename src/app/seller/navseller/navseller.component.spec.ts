import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavsellerComponent } from './navseller.component';

describe('NavsellerComponent', () => {
  let component: NavsellerComponent;
  let fixture: ComponentFixture<NavsellerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavsellerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavsellerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
