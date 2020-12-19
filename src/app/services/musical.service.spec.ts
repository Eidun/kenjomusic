import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { TestModule } from '../app.test.module';
import { MusicalMockService } from './mocks/musical.mock.service';

import { MusicalService } from './musical.service';

describe('MusicalService', () => {
  let service: MusicalService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [TestModule]
    });
    service = TestBed.inject(MusicalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
