import { Module } from '@nestjs/common';
import { BookingUseCase } from './booking-usecase';
import { BookingServiceModule } from '../../infrastructure/services/booking/booking.service.module';
import { ManageInfracturesServiceModule } from '../../infrastructure/services/manage-infractures/manage-infractures.module';

@Module({
  imports: [BookingServiceModule, ManageInfracturesServiceModule],
  exports: [BookingUseCase],
  providers: [BookingUseCase],
})
export class BookingUseCaseModule {}
