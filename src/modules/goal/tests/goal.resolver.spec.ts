import { Test, TestingModule } from '@nestjs/testing';
import { GoalResolver } from '../goal.resolver';

describe('GoalResolver', () => {
  let resolver: GoalResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GoalResolver],
    }).compile();

    resolver = module.get<GoalResolver>(GoalResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
