import { PrismaPg } from '@prisma/adapter-pg';
import { PrismaClient } from '../src/generated/prisma/client';

const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL });
const prisma = new PrismaClient({ adapter });

async function seedingData() {
  console.log('Start seeding data...');

  await prisma.roles.deleteMany({});
  await prisma.users.deleteMany({});

  await prisma.roles.createMany({
    data: [
      {
        name: 'admin',
      },
      {
        name: 'user',
      },
    ],
  });

  await prisma.users.createMany({
    data: [
      {
        name: 'admin',
        email: 'admin@example.com',
        password: 'admin123',
        role_id: 1,
        status: 'active',
        membership_level: 'premium',
      },
      {
        name: 'user1',
        email: 'user1@example.com',
        password: 'user123',
        role_id: 2,
        status: 'active',
        membership_level: 'premium',
      },
    ],
  });

  console.log('Seeding completed.');
}

seedingData()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
