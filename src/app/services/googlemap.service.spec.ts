/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { GooglemapService } from './googlemap.service';

describe('GooglemapService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GooglemapService]
    });
  });

  it('should ...', inject([GooglemapService], (service: GooglemapService) => {
    expect(service).toBeTruthy();
  }));
});
