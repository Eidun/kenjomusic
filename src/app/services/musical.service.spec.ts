import { TestBed } from '@angular/core/testing';

import { MusicalService } from './musical.service';

describe('MusicalService', () => {
  let service: MusicalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MusicalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
