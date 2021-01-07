import { TestBed } from '@angular/core/testing';

import { ProjectDetail.ResolverService } from './project-detail.resolver.service';

describe('ProjectDetail.ResolverService', () => {
  let service: ProjectDetail.ResolverService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProjectDetail.ResolverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
