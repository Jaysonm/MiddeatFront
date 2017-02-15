/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { WsPropositionService } from './ws-proposition.service';

describe('WsPropositionService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WsPropositionService]
    });
  });

  it('should ...', inject([WsPropositionService], (service: WsPropositionService) => {
    expect(service).toBeTruthy();
  }));
});
