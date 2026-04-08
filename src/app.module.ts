import { Module } from '@nestjs/common';
import { BookingControllerModule } from './controllers/booking/booking.controller.module';
import { ConfigModule } from '@nestjs/config';
import { ManagerInfracturesModule } from './controllers/manager-infractures/manager-infractures.module';
import { ResourcesControllerModule } from './controllers/resources/resources.controller.module';

@Module({
  imports: [
    BookingControllerModule,
    ResourcesControllerModule,
    ConfigModule.forRoot({ isGlobal: true }),
    ManagerInfracturesModule,
  ],
})
export class AppModule {}
