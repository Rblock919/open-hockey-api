import { Test, TestingModule } from '@nestjs/testing';
import { ProspectService } from '../prospect.service';

describe('ProspectService', () => {
  let service: ProspectService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ProspectService],
    }).compile();

    service = module.get<ProspectService>(ProspectService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
