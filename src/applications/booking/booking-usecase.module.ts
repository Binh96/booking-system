import { Module } from '@nestjs/common';
import { BookingUseCase } from './booking-usecase';
import { BookingRepositoryModule } from '../../infrastructure/repositories/booking/booking-repository.module';

@Module({
  imports: [BookingRepositoryModule],
  exports: [BookingUseCase],
  providers: [BookingUseCase],
})
export class BookingUseCaseModule {}
