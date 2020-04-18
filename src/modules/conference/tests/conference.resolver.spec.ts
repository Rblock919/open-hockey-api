import { Test, TestingModule } from '@nestjs/testing';
import { ConferenceResolver } from '../conference.resolver';

describe('ConferenceResolver', () => {
  let resolver: ConferenceResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ConferenceResolver],
    }).compile();

    resolver = module.get<ConferenceResolver>(ConferenceResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
