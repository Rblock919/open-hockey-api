import { Test, TestingModule } from '@nestjs/testing';
import { FranchiseResolver } from '../franchise.resolver';

describe('FranchiseResolver', () => {
  let resolver: FranchiseResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FranchiseResolver],
    }).compile();

    resolver = module.get<FranchiseResolver>(FranchiseResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
