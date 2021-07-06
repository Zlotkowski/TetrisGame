import { TestBed } from '@angular/core/testing';

import { ApiScoreService } from './api-score.service';

describe('ApiScoreService', () => {
  let service: ApiScoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiScoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
