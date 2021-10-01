import { TestBed } from '@angular/core/testing';

import { HttpGetService } from './http-get.service';

describe('HttpGetService', () => {
  let service: HttpGetService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HttpGetService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
