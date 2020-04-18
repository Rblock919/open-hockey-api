import { Test, TestingModule } from '@nestjs/testing';
import { AssistResolver } from '../assist.resolver';

describe('AssistResolver', () => {
  let resolver: AssistResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AssistResolver],
    }).compile();

    resolver = module.get<AssistResolver>(AssistResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
