import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetapiCRUDComponent } from './getapi-crud.component';

describe('GetapiCRUDComponent', () => {
  let component: GetapiCRUDComponent;
  let fixture: ComponentFixture<GetapiCRUDComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetapiCRUDComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetapiCRUDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
