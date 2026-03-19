// import { BookingRepository } from '../../models/booking/repositories/booking-repository';
// import { ResourceRepository } from '../../models/resource/repositories/resource-repository';

// /**
//  * Sync resource states based on current time.
//  * - Bookings active at `now` -> resource = 'meeting'
//  * - (Caller can extend this) bookings ended -> resource = 'available'
//  */
// export async function syncResourceStates(
//   now: Date,
//   bookingRepo: BookingRepository,
//   resourceRepo: ResourceRepository
// ): Promise<{ updatedCount: number }> {
//   const active = await bookingRepo.findActiveAt(now);
//   for (const b of active) {
//     await resourceRepo.updateStatus(b.resourceId, 'meeting');
//   }
//   // Note: freeing resources when bookings end requires a complementary repo method.
//   return { updatedCount: active.length };
// }
