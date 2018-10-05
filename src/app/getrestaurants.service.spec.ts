import { TestBed } from '@angular/core/testing';

import { GetrestaurantsService } from './getrestaurants.service';

describe('GetrestaurantsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GetrestaurantsService = TestBed.get(GetrestaurantsService);
    expect(service).toBeTruthy();
  });
});
