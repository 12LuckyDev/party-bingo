import { TestBed } from '@angular/core/testing';

import { PartyBingoLibService } from './party-bingo-lib.service';

describe('PartyBingoLibService', () => {
  let service: PartyBingoLibService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PartyBingoLibService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
