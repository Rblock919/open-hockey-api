import { Test, TestingModule } from '@nestjs/testing';
import { AssistService } from '../assist.service';

describe('AssistService', () => {
  let service: AssistService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AssistService],
    }).compile();

    service = module.get<AssistService>(AssistService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
