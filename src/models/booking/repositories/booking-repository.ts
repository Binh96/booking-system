// export interface TimeRange {
//   start: Date;
//   end: Date;
// }

// export interface BookingRecord {
//   id: string;
//   userId: string;
//   resourceId: string;
//   start: Date;
//   end: Date;
//   status?: string;
//   meta?: Record<string, unknown>;
// }

// export interface BookingRepository {
//   findConflicts(resourceId: string, timeRange: TimeRange): Promise<BookingRecord[]>;
//   create(data: { userId: string; resourceId: string; timeRange: TimeRange; meta?: any }): Promise<BookingRecord>;
//   update(bookingId: string, data: Partial<BookingRecord>): Promise<BookingRecord>;
//   findById(bookingId: string): Promise<BookingRecord | null>;
//   findByUser(userId: string, filter?: any): Promise<BookingRecord[]>;
//   findActiveAt(now: Date): Promise<BookingRecord[]>;
//   findUpcoming(resourceId: string, windowMins?: number): Promise<BookingRecord[]>;
// }
