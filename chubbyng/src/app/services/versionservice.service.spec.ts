import { TestBed } from '@angular/core/testing';

import { VersionserviceService } from './versionservice.service';

describe('VersionserviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: VersionserviceService = TestBed.get(VersionserviceService);
    expect(service).toBeTruthy();
  });
});
