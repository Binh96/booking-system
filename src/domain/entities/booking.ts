export class BookingEntity {
  constructor(
    public id: number,
    public userId: number,
    public startTime: Date,
    public endTime: Date,
    public resourceId: number,
    public status: string,
    public price: number,
    public createdAt?: Date,
    public updatedAt?: Date
  ) {
    this.id = id;
    this.resourceId = resourceId;
    this.userId = userId;
    this.startTime = startTime;
    this.endTime = endTime;
    this.status = status;
    this.price = price;
    this.createdAt = createdAt ?? new Date();
    this.updatedAt = updatedAt ?? new Date();
  }
}
