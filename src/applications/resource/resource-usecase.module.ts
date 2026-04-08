import { Module } from '@nestjs/common';
import { ResourceUsecase } from './resource-usecase';
import { ResourceServiceModule } from '../../infrastructure/services/resource/resource.service.module';

@Module({
  imports: [ResourceServiceModule],
  exports: [ResourceUsecase],
  providers: [ResourceUsecase],
})
export class ResourceUsecaseModule {}
