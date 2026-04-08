import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../../shared/prisma/prisma.service';
import {
  CreateInfracture,
  GetInfracture,
  InfractureStatus,
  UpdateInfracture,
} from './manage-infractures.i';

@Injectable()
export class ManageInfracturesService {
  constructor(private prisma: PrismaService) {}

  public async createInfractures(infracture: CreateInfracture) {
    const getInfracture = await this.getInfractureById(infracture.id);

    if (!getInfracture || getInfracture.status === InfractureStatus.ACTIVE) {
      throw new Error('Infracture already used');
    }

    await this.prisma.client.resources.create({
      data: {
        name: infracture.name,
        type: infracture.type,
        capacity: infracture.capacity,
        status: infracture.status,
        created_at: infracture.created_at,
        updated_at: infracture.updated_at,
      },
    });
  }

  public async updateInfractures(infracture: UpdateInfracture) {
    await this.prisma.client.resources.update({
      where: {
        id: infracture.id,
      },
      data: {
        name: infracture.name,
        type: infracture.type,
        capacity: infracture.capacity,
        status: infracture.status,
        created_at: infracture.created_at,
        updated_at: infracture.updated_at,
      },
    });
  }

  private async getInfractureById(id: number): Promise<GetInfracture> {
    const infracture = await this.prisma.client.resources.findUnique({
      where: {
        id,
      },
    });

    if (infracture === null) {
      throw new Error('Infracture not found');
    }

    return {
      id: infracture.id,
      name: infracture.name,
      type: infracture.type,
      capacity: infracture.capacity,
      status: infracture.status as InfractureStatus,
      created_at: infracture.created_at.valueOf().toString(),
      updated_at: infracture.updated_at.valueOf().toString(),
    };
  }
}
