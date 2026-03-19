import { BookingEntity } from '../../../domain/entities/booking';
import { BookingService } from '../../../infrastructure/services/booking/booking.service';
import { Injectable } from '@nestjs/common';

@Injectable()
export class BookingRepository {
  constructor(private readonly bookingService: BookingService) {}

  public async getBookings(): Promise<BookingEntity[]> {
    return await this.bookingService.getBookings();
  }
}
