import { TestBed } from '@angular/core/testing';

import { ObservableserviceService } from './observableservice.service';

describe('ObservableserviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ObservableserviceService = TestBed.get(ObservableserviceService);
    expect(service).toBeTruthy();
  });
});
