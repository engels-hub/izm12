import { TestBed } from '@angular/core/testing';

import { EmailSenderService } from './email-sender.service';

describe('EmailSenderService', () => {
  let service: EmailSenderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmailSenderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
