import { Test, TestingModule } from '@nestjs/testing';
import { LiquorService } from './liquor.service';

describe('LiquorService', () => {
  let service: LiquorService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LiquorService],
    }).compile();

    service = module.get<LiquorService>(LiquorService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
