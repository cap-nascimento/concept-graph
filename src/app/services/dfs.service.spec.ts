import { TestBed } from '@angular/core/testing';

import { DfsService } from './dfs.service';

describe('DfsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DfsService = TestBed.get(DfsService);
    expect(service).toBeTruthy();
  });
});
