import { Test, TestingModule } from '@nestjs/testing';
import { ScheduleResolver } from '../schedule.resolver';

describe('ScheduleResolver', () => {
  let resolver: ScheduleResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ScheduleResolver],
    }).compile();

    resolver = module.get<ScheduleResolver>(ScheduleResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
