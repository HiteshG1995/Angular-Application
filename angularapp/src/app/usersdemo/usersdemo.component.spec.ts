import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersdemoComponent } from './usersdemo.component';

describe('UsersdemoComponent', () => {
  let component: UsersdemoComponent;
  let fixture: ComponentFixture<UsersdemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsersdemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersdemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
