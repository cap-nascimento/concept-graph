import { TestBed } from '@angular/core/testing';

import { DijkstraService } from './dijkstra.service';

describe('DijkstraService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DijkstraService = TestBed.get(DijkstraService);
    expect(service).toBeTruthy();
  });
});
