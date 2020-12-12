import { TestBed } from '@angular/core/testing';

import { CreatePollStateService } from './create-poll-state.service';

describe('CreatePollStateService', () => {
  let service: CreatePollStateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CreatePollStateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
