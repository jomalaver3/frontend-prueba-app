import { TestBed } from '@angular/core/testing';

import { MateriasProfesoresService } from './materias-profesores.service';

describe('MateriasProfesoresService', () => {
  let service: MateriasProfesoresService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MateriasProfesoresService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
