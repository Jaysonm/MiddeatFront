/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { SpinnerService } from './spinner.subject';

describe('SpinnerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SpinnerService]
    });
  });

  it('should ...', inject([SpinnerService], (service: SpinnerService) => {
    expect(service).toBeTruthy();
  }));
});
