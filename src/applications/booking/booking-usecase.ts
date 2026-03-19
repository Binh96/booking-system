import { Injectable } from '@nestjs/common';
import { BookingRepository } from '../../infrastructure/repositories/booking/booking-repository';

@Injectable()
export class BookingUseCase {
  constructor(private readonly bookingRepository: BookingRepository) {}

  public async getBookings() {
    return await this.bookingRepository.getBookings();
  }
}
