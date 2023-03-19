import { TestBed } from '@angular/core/testing';

import { UtilitySerService } from './utility-ser.service';

describe('UtilitySerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UtilitySerService = TestBed.get(UtilitySerService);
    expect(service).toBeTruthy();
  });
});
