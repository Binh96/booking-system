import { Module } from '@nestjs/common';
import { BookingRepository } from './booking-repository';
import { BookingServiceModule } from '../../../infrastructure/services/booking/booking.service.module';

@Module({
  imports: [BookingServiceModule],
  exports: [BookingRepository],
  providers: [BookingRepository],
})
export class BookingRepositoryModule {}
