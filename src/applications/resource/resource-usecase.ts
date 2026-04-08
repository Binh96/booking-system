import { Injectable } from '@nestjs/common';
import { ResourceService } from '../../infrastructure/services/resource/resource.service';

@Injectable()
export class ResourceUsecase {
  constructor(private resourceService: ResourceService) {}

  public async getResources() {
    return this.resourceService.getResources();
  }
}
