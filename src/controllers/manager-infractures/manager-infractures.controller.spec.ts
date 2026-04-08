import { Test, TestingModule } from '@nestjs/testing';
import { ManagerInfracturesController } from './manager-infractures.controller';

describe('ManagerInfracturesController', () => {
  let controller: ManagerInfracturesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ManagerInfracturesController],
    }).compile();

    controller = module.get<ManagerInfracturesController>(ManagerInfracturesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
