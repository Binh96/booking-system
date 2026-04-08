import { Module } from '@nestjs/common';
import { ResourceService } from './resource.service';
import { PrismaModule } from '../../../shared/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  exports: [ResourceService],
  providers: [ResourceService],
})
export class ResourceServiceModule {}
