// import { TimeRange } from '../../models/booking/repositories/booking-repository';
// import { InvalidTimeError } from '../../utils/errors';

// export function validateTimeRange(timeRange: TimeRange, now = new Date()): void {
//   if (!timeRange || !(timeRange.start instanceof Date) || !(timeRange.end instanceof Date)) {
//     throw new InvalidTimeError('Invalid Date objects for start/end');
//   }
//   if (timeRange.start.getTime() >= timeRange.end.getTime()) {
//     throw new InvalidTimeError('Start must be before end');
//   }
//   if (timeRange.end.getTime() <= now.getTime()) {
//     throw new InvalidTimeError('Time range is in the past');
//   }
// }
