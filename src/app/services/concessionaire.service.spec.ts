import { TestBed } from '@angular/core/testing';

import { ConcessionaireService } from './concessionaire.service';

describe('ConcessionaireService', () => {
  let service: ConcessionaireService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConcessionaireService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
