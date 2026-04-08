import { Controller, Get } from '@nestjs/common';
import { ResourceUsecase } from '../../applications/resource/resource-usecase';

@Controller()
export class ResourcesController {
  constructor(private resourceUsecase: ResourceUsecase) {}

  @Get('/resources')
  getResources() {
    return this.resourceUsecase.getResources();
  }
}
