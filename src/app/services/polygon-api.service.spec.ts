import { TestBed, inject } from '@angular/core/testing';

import { PolygonApiService } from './polygon-api.service';

describe('PolygonApiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PolygonApiService]
    });
  });

  it('should be created', inject([PolygonApiService], (service: PolygonApiService) => {
    expect(service).toBeTruthy();
  }));
});
