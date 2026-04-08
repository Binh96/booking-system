import { Injectable, OnModuleDestroy, OnModuleInit } from '@nestjs/common';
import { PrismaPg } from '@prisma/adapter-pg';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService implements OnModuleInit, OnModuleDestroy {
  private readonly adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL });
  public readonly client = new PrismaClient({
    adapter: this.adapter,
    log: ['query', 'info', 'warn', 'error'],
  });

  async onModuleInit() {
    await this.client.$connect();
  }

  async onModuleDestroy() {
    await this.client.$disconnect();
  }
}
