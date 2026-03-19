// import { BookingRepository, TimeRange, BookingRecord } from '../../models/booking/repositories/booking-repository';
// import { ResourceRepository } from '../../models/resource/repositories/resource-repository';
// import { validateTimeRange } from './booking-utils';
// import { BookingConflictError, ResourceNotAvailableError } from '../../utils/errors';

// export async function createBooking(
//   userId: string,
//   resourceId: string,
//   timeRange: TimeRange,
//   bookingRepo: BookingRepository,
//   resourceRepo: ResourceRepository,
//   meta?: Record<string, unknown>,
// ): Promise<BookingRecord> {
//   validateTimeRange(timeRange);

//   const resource = await resourceRepo.findById(resourceId);
//   if (!resource || resource.status !== 'available') {
//     throw new ResourceNotAvailableError();
//   }

//   const conflicts = await bookingRepo.findConflicts(resourceId, timeRange);
//   if (conflicts.length > 0) {
//     throw new BookingConflictError();
//   }

//   const booking = await bookingRepo.create({ userId, resourceId, timeRange, meta });
//   // Optionally mark resource as reserved
//   await resourceRepo.updateStatus(resourceId, 'reserved');
//   return booking;
// }

// export async function cancelBooking(
//   bookingId: string,
//   bookingRepo: BookingRepository,
//   resourceRepo: ResourceRepository,
//   opts?: { userId?: string; reason?: string },
// ): Promise<BookingRecord | null> {
//   const exist = await bookingRepo.findById(bookingId);
//   if (!exist) return null;
//   const updated = await bookingRepo.update(bookingId, { status: 'cancelled' });
//   await resourceRepo.updateStatus(exist.resourceId, 'available');
//   return updated;
// }

// export async function getBookingsForUser(
//   userId: string,
//   bookingRepo: BookingRepository,
//   filter?: any,
// ): Promise<BookingRecord[]> {
//   return bookingRepo.findByUser(userId, filter);
// }

// export async function extendBooking(
//   bookingId: string,
//   newEnd: Date,
//   bookingRepo: BookingRepository,
// ): Promise<BookingRecord> {
//   const exist = await bookingRepo.findById(bookingId);
//   if (!exist) throw new Error('Booking not found');
//   const timeRange: TimeRange = { start: exist.start, end: newEnd };
//   validateTimeRange(timeRange);
//   const conflicts = await bookingRepo.findConflicts(exist.resourceId, timeRange);
//   // remove current booking from conflicts if it appears
//   const otherConflicts = conflicts.filter((c) => c.id !== bookingId);
//   if (otherConflicts.length > 0) throw new BookingConflictError();
//   return bookingRepo.update(bookingId, { end: newEnd });
// }
