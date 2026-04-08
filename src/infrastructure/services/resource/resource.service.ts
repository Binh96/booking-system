import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../../shared/prisma/prisma.service';
import { Resource } from './resource.i';

@Injectable()
export class ResourceService {
  constructor(private prisma: PrismaService) {}

  public async getResources(): Promise<Resource[]> {
    const resources = await this.prisma.client.resources.findMany();
    if (!resources || !resources.length) {
      throw new Error('Resources not found');
    }

    return resources.map((resource) => ({
      name: resource.name,
      type: resource.type,
      capacity: resource.capacity,
      status: resource.status,
    }));
  }
}
