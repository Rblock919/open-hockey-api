import { Test, TestingModule } from '@nestjs/testing';
import { FranchiseService } from '../franchise.service';

describe('FranchiseService', () => {
  let service: FranchiseService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FranchiseService],
    }).compile();

    service = module.get<FranchiseService>(FranchiseService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
