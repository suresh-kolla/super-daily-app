import { TestBed } from '@angular/core/testing';

import { milkserviceService } from './milkservice.service';

describe('MilkserviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: milkserviceService = TestBed.get(milkserviceService);
    expect(service).toBeTruthy();
  });
});
