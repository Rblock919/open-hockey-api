import { Test, TestingModule } from '@nestjs/testing';
import { AwardResolver } from '../award.resolver';

describe('AwardResolver', () => {
  let resolver: AwardResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AwardResolver],
    }).compile();

    resolver = module.get<AwardResolver>(AwardResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
