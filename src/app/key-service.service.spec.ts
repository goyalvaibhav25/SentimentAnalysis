import { TestBed } from '@angular/core/testing';

import { KeyServiceService } from './key-service.service';

describe('KeyServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: KeyServiceService = TestBed.get(KeyServiceService);
    expect(service).toBeTruthy();
  });
});
