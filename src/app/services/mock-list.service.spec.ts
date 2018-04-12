import { TestBed, inject } from '@angular/core/testing';

import { MockListService } from './mock-list.service';

describe('MockListService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MockListService]
    });
  });

  it('should be created', inject([MockListService], (service: MockListService) => {
    expect(service).toBeTruthy();
  }));
});
