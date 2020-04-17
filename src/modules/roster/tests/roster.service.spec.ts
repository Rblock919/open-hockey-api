import { Test, TestingModule } from '@nestjs/testing';
import { RosterService } from '../roster.service';

describe('RosterService', () => {
  let service: RosterService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RosterService],
    }).compile();

    service = module.get<RosterService>(RosterService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
