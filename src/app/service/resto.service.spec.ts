/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { RestoService } from './resto.service';

describe('RestoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RestoService]
    });
  });

  it('should ...', inject([RestoService], (service: RestoService) => {
    expect(service).toBeTruthy();
  }));
});
