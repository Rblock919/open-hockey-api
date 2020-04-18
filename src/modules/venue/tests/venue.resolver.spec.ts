import { Test, TestingModule } from '@nestjs/testing';
import { VenueResolver } from '../venue.resolver';

describe('VenueResolver', () => {
  let resolver: VenueResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [VenueResolver],
    }).compile();

    resolver = module.get<VenueResolver>(VenueResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
