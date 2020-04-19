import { Test, TestingModule } from '@nestjs/testing';
import { ProspectResolver } from '../prospect.resolver';

describe('ProspectResolver', () => {
  let resolver: ProspectResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ProspectResolver],
    }).compile();

    resolver = module.get<ProspectResolver>(ProspectResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
