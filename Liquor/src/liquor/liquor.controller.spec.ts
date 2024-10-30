import { Test, TestingModule } from '@nestjs/testing';
import { LiquorController } from './liquor.controller';
import { LiquorService } from './liquor.service';

describe('LiquorController', () => {
  let controller: LiquorController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [LiquorController],
      providers: [LiquorService],
    }).compile();

    controller = module.get<LiquorController>(LiquorController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
