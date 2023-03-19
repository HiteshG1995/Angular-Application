import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserdemodetailsComponent } from './userdemodetails.component';

describe('UserdemodetailsComponent', () => {
  let component: UserdemodetailsComponent;
  let fixture: ComponentFixture<UserdemodetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserdemodetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserdemodetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
