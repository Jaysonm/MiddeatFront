/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ParticipantService } from './participant.service';

describe('ParticipantService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ParticipantService]
    });
  });

  it('should ...', inject([ParticipantService], (service: ParticipantService) => {
    expect(service).toBeTruthy();
  }));
});
