import { Injectable } from '@nestjs/common';
import { BookingService } from '../../infrastructure/services/booking/booking.service';
import { ManageInfracturesService } from '../../infrastructure/services/manage-infractures/manage-infractures.service';

@Injectable()
export class BookingUseCase {
  constructor(
    private readonly bookingService: BookingService,
    private manageInfracturesService: ManageInfracturesService
  ) {}

  public async getBookings() {
    return await this.bookingService.getBookings();
  }

  // public async createResource(data: any) {
  //   const { infractureId } = data;
  //   const infracture =
  //     await this.manageInfracturesService.getInfractureById(infractureId);
  //   if (!infracture) {
  //     throw new Error('Infracture not found');
  //   }
  //   return await this.manageInfracturesService.createInfractures(data);
  // }

  // public async updateResource(id: number, data: any) {
  //   const { infractureId } = data;
  //   const infracture =
  //     await this.manageInfracturesService.getInfractureById(infractureId);
  //   if (!infracture) {
  //     throw new Error('Infracture not found');
  //   }
  //   return await this.manageInfracturesService.updateInfractures(data);
  // }
}
