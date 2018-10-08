import { TestBed } from '@angular/core/testing';

import { AddtofavouritesService } from './addtofavourites.service';

describe('AddtofavouritesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AddtofavouritesService = TestBed.get(AddtofavouritesService);
    expect(service).toBeTruthy();
  });
});
