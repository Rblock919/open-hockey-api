import { Test, TestingModule } from '@nestjs/testing';
import { AwardService } from '../award.service';

describe('AwardService', () => {
  let service: AwardService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AwardService],
    }).compile();

    service = module.get<AwardService>(AwardService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
