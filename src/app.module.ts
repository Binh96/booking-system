import { Module } from '@nestjs/common';
import { BookingControllerModule } from './controllers/booking/booking.controller.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [BookingControllerModule, ConfigModule.forRoot({ isGlobal: true })],
})
export class AppModule {}
