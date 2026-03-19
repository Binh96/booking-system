// import { PrismaClient } from '../../../generated/prisma/client';
// import {
//   BookingRepository,
//   BookingRecord,
//   TimeRange,
// } from './booking-repository';

// const prisma = new PrismaClient();

// export class PrismaBookingRepository implements BookingRepository {
//   async findConflicts(resourceId: string, timeRange: TimeRange): Promise<BookingRecord[]> {
//     const rows = await prisma.bookings.findMany({
//       where: {
//         resourceId,
//         AND: [{ start: { lt: timeRange.end } }, { end: { gt: timeRange.start } }],
//       },
//     });
//     return rows.map(mapRow);
//   }

//   async create(data: { userId: string; resourceId: string; timeRange: TimeRange; meta?: any }): Promise<BookingRecord> {
//     const row = await prisma.bookings.create({
//       data: {
//         userId: data.userId,
//         resourceId: data.resourceId,
//         start: data.timeRange.start,
//         end: data.timeRange.end,
//         meta: data.meta as any,
//       },
//     });
//     return mapRow(row);
//   }

//   async update(bookingId: string, data: Partial<BookingRecord>): Promise<BookingRecord> {
//     const row = await prisma.bookings.update({
//       where: { id: bookingId },
//       data: {
//         start: (data.start as Date) ?? undefined,
//         end: (data.end as Date) ?? undefined,
//         status: data.status ?? undefined,
//         meta: data.meta ?? undefined,
//       },
//     });
//     return mapRow(row);
//   }

//   async findById(bookingId: string): Promise<BookingRecord | null> {
//     const row = await prisma.bookings.findUnique({ where: { id: bookingId } });
//     return row ? mapRow(row) : null;
//   }

//   async findByUser(userId: string, filter?: any): Promise<BookingRecord[]> {
//     const rows = await prisma.bookings.findMany({ where: { userId } });
//     return rows.map(mapRow);
//   }

//   async findActiveAt(now: Date): Promise<BookingRecord[]> {
//     const rows = await prisma.bookings.findMany({
//       where: {
//         start: { lte: now },
//         end: { gt: now },
//         NOT: { status: 'cancelled' },
//       },
//     });
//     return rows.map(mapRow);
//   }

//   async findUpcoming(resourceId: string, windowMins = 30): Promise<BookingRecord[]> {
//     const now = new Date();
//     const windowEnd = new Date(now.getTime() + windowMins * 60000);
//     const rows = await prisma.bookings.findMany({
//       where: {
//         resourceId,
//         start: { gt: now, lte: windowEnd },
//         NOT: { status: 'cancelled' },
//       },
//       orderBy: { start: 'asc' },
//     });
//     return rows.map(mapRow);
//   }
// }

// function mapRow(row: any): BookingRecord {
//   return {
//     id: row.id,
//     userId: row.userId,
//     resourceId: row.resourceId,
//     start: row.start,
//     end: row.end,
//     status: row.status,
//     meta: row.meta,
//   };
// }
