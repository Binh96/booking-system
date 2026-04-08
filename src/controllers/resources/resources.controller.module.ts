import { Module } from '@nestjs/common';
import { ResourcesController } from './resources.controller';
import { ResourceUsecaseModule } from '../../applications/resource/resource-usecase.module';

@Module({
  imports: [ResourceUsecaseModule],
  controllers: [ResourcesController],
})
export class ResourcesControllerModule {}
