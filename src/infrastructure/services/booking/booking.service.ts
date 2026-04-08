import { Injectable } from '@nestjs/common';
import { BookingEntity } from '../../../domain/entities/booking';
import { PrismaService } from '../../../shared/prisma/prisma.service';

@Injectable()
export class BookingService {
  constructor(private prisma: PrismaService) {}

  public async getBookings(): Promise<BookingEntity[]> {
    return await this.prisma.client.bookings.findMany().then((bookings) =>
      bookings.map((booking) => ({
        id: booking.id ?? 0,
        userId: booking.user_id,
        startTime: booking.start_time,
        endTime: booking.end_time,
        resourceId: booking.resources_id ?? 0,
        status: booking.status,
        price: booking.price,
        createdAt: booking.created_at,
        updatedAt: booking.updated_at,
      }))
    );
  }
}
