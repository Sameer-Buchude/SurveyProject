import { TestBed } from '@angular/core/testing';

import { ShowallService } from './showall.service';

describe('ShowallService', () => {
  let service: ShowallService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShowallService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
