import { Controller, Get } from '@nestjs/common';
import { BookingUseCase } from '../../applications/booking/booking-usecase';

@Controller('')
export class BookingController {
  constructor(private readonly bookingUseCase: BookingUseCase) {}

  @Get('/bookings')
  async getBookings() {
    // Implement the logic to get bookings, e.g., call the use case method
    return await this.bookingUseCase.getBookings();
  }
}
