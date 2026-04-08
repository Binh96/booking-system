import { Test, TestingModule } from '@nestjs/testing';
import { ManageInfracturesService } from './manage-infractures.service';

describe('ManageInfracturesService', () => {
  let service: ManageInfracturesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ManageInfracturesService],
    }).compile();

    service = module.get<ManageInfracturesService>(ManageInfracturesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
