/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { LoggedService } from './logged.subject';

describe('LoggedService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LoggedService]
    });
  });

  it('should ...', inject([LoggedService], (service: LoggedService) => {
    expect(service).toBeTruthy();
  }));
});
