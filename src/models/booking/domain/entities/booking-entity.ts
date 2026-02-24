import { TimeRange } from '../values-object/time-range.vo';

export enum BookingStatus {
  PENDING = 'PENDING',
  CONFIRMED = 'CONFIRMED',
  CANCELLED = 'CANCELLED',
  COMPLETED = 'COMPLETED',
  EXPIRED = 'EXPIRED',
}

export class BookingEntity {
  constructor(
    private id: string,
    private userId: string,
    private resourceId: string,
    private timeRange: TimeRange,
    private status: BookingStatus,
    private price: number,
    private usersId: string
  ) {}

  cancel(now: Date, cancellationWindowMinutes: number) {
    const diff = (this.timeRange.start.getTime() - now.getTime()) / 60000;

    if (diff < cancellationWindowMinutes) {
      throw new Error('Cancellation window exceeded');
    }

    this.status = BookingStatus.CANCELLED;
  }
}
