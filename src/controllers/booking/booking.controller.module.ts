import { Module } from '@nestjs/common';
import { BookingUseCaseModule } from '../../applications/booking/booking-usecase.module';
import { BookingController } from './booking.controller';

@Module({
  controllers: [BookingController],
  providers: [],
  imports: [BookingUseCaseModule],
})
export class BookingControllerModule {}
