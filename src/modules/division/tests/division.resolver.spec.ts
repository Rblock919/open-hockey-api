import { Test, TestingModule } from '@nestjs/testing';
import { DivisionResolver } from '../division.resolver';

describe('DivisionResolver', () => {
  let resolver: DivisionResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DivisionResolver],
    }).compile();

    resolver = module.get<DivisionResolver>(DivisionResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
