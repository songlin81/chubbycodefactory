import { TestBed } from '@angular/core/testing';

import { LangserviceService } from './langservice.service';

describe('LangserviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LangserviceService = TestBed.get(LangserviceService);
    expect(service).toBeTruthy();
  });
});
