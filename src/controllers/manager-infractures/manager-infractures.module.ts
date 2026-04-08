import { Module } from '@nestjs/common';
import { ManagerInfracturesController } from './manager-infractures.controller';

@Module({
  controllers: [ManagerInfracturesController],
})
export class ManagerInfracturesModule {}
