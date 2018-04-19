import { TestBed, inject } from '@angular/core/testing';

import { IgnApiService } from './ign-api.service';

describe('IgnApiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [IgnApiService]
    });
  });

  it('should be created', inject([IgnApiService], (service: IgnApiService) => {
    expect(service).toBeTruthy();
  }));
});
