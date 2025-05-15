import { TestBed } from '@angular/core/testing';

import { CompanerosClaseService } from './companeros-clase.service';

describe('CompanerosClaseService', () => {
  let service: CompanerosClaseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CompanerosClaseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
