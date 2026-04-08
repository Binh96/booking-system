import { Module } from '@nestjs/common';
import { ManageInfracturesService } from './manage-infractures.service';
import { PrismaModule } from '../../../shared/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  exports: [ManageInfracturesService],
  providers: [ManageInfracturesService],
})
export class ManageInfracturesServiceModule {}
