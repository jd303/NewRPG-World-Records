import { TestBed } from '@angular/core/testing';

import { DataTransportService } from './data-transport.service';

describe('DataTransportService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DataTransportService = TestBed.get(DataTransportService);
    expect(service).toBeTruthy();
  });
});
