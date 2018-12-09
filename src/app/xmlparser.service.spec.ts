import { TestBed } from '@angular/core/testing';

import { XmlparserService } from './xmlparser.service';

describe('XmlparserService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: XmlparserService = TestBed.get(XmlparserService);
    expect(service).toBeTruthy();
  });
});
