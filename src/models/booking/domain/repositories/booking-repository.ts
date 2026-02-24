export abstract class BookingRepository {
  abstract saveBooking(booking: any): Promise<void>;
  abstract findOverLappingBookings(startDate: Date, endDate: Date): Promise<any[]>;
}
