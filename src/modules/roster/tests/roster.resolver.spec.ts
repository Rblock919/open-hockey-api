import { Test, TestingModule } from '@nestjs/testing';
import { RosterResolver } from '../roster.resolver';

describe('RosterResolver', () => {
  let resolver: RosterResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RosterResolver],
    }).compile();

    resolver = module.get<RosterResolver>(RosterResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
