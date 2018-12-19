import { TestBed } from '@angular/core/testing';

import { CommunityUpdateService } from './community-update.service';

describe('CommunityUpdateService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CommunityUpdateService = TestBed.get(CommunityUpdateService);
    expect(service).toBeTruthy();
  });
});
