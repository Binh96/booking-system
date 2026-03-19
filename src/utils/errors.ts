export class BookingConflictError extends Error {
  constructor(message?: string) {
    super(message ?? 'Booking conflict detected');
    this.name = 'BookingConflictError';
  }
}

export class InvalidTimeError extends Error {
  constructor(message?: string) {
    super(message ?? 'Invalid time range');
    this.name = 'InvalidTimeError';
  }
}

export class ResourceNotAvailableError extends Error {
  constructor(message?: string) {
    super(message ?? 'Resource is not available');
    this.name = 'ResourceNotAvailableError';
  }
}

export class PermissionError extends Error {
  constructor(message?: string) {
    super(message ?? 'Permission denied');
    this.name = 'PermissionError';
  }
}
