export class TimeRange {
  constructor(
    public readonly start: Date,
    public readonly end: Date
  ) {
    if (start >= end) {
      throw new Error('Start time must be before end time');
    }
  }

  durationInMinutes(): number {
    return (this.end.getTime() - this.start.getTime()) / 60000;
  }
}
