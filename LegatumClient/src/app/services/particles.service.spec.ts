import { TestBed, inject } from '@angular/core/testing';

import { ParticlesService } from './particles.service';

describe('ParticlesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ParticlesService]
    });
  });

  it('should be created', inject([ParticlesService], (service: ParticlesService) => {
    expect(service).toBeTruthy();
  }));
});
