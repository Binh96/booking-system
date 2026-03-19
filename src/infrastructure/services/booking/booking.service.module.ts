import { Module } from '@nestjs/common';
import { BookingService } from './booking.service';
import { PrismaModule } from '../../../shared/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  exports: [BookingService],
  providers: [BookingService],
})
export class BookingServiceModule {}
