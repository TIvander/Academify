import { TestBed } from '@angular/core/testing';

import { NovoAlunoService } from './novo-aluno.service';

describe('NovoAlunoService', () => {
  let service: NovoAlunoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NovoAlunoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
