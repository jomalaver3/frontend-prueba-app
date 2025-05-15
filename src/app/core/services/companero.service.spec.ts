import { TestBed } from '@angular/core/testing';

import { CompaneroService } from './companero.service';

describe('CompaneroService', () => {
  let service: CompaneroService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CompaneroService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
