import { TestBed } from '@angular/core/testing';

import { SimpleBook1ServiceService } from './simple-book1-service.service';

describe('SimpleBook1ServiceService', () => {
  let service: SimpleBook1ServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SimpleBook1ServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
