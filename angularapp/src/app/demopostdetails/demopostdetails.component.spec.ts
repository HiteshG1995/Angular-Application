import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemopostdetailsComponent } from './demopostdetails.component';

describe('DemopostdetailsComponent', () => {
  let component: DemopostdetailsComponent;
  let fixture: ComponentFixture<DemopostdetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemopostdetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemopostdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
