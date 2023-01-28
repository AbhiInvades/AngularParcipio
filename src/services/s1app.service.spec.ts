import { TestBed } from '@angular/core/testing';

import { S1appService } from './s1app.service';

describe('S1appService', () => {
  let service: S1appService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(S1appService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
