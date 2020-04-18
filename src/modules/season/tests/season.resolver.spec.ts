import { Test, TestingModule } from '@nestjs/testing';
import { SeasonResolver } from '../season.resolver';

describe('SeasonResolver', () => {
  let resolver: SeasonResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SeasonResolver],
    }).compile();

    resolver = module.get<SeasonResolver>(SeasonResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
