/*
  Warnings:

  - You are about to drop the column `resourcesId` on the `booking_policies` table. All the data in the column will be lost.
  - You are about to drop the column `resourcesId` on the `bookings` table. All the data in the column will be lost.
  - You are about to drop the column `usersId` on the `bookings` table. All the data in the column will be lost.
  - You are about to drop the column `resourcesId` on the `opening_hours` table. All the data in the column will be lost.
  - You are about to drop the column `resourcesId` on the `pricing_rules` table. All the data in the column will be lost.
  - You are about to drop the column `roleId` on the `users` table. All the data in the column will be lost.
  - Added the required column `resources_id` to the `booking_policies` table without a default value. This is not possible if the table is not empty.
  - Added the required column `resources_id` to the `bookings` table without a default value. This is not possible if the table is not empty.
  - Added the required column `user_id` to the `bookings` table without a default value. This is not possible if the table is not empty.
  - Added the required column `resources_id` to the `opening_hours` table without a default value. This is not possible if the table is not empty.
  - Added the required column `resources_id` to the `pricing_rules` table without a default value. This is not possible if the table is not empty.
  - Added the required column `role_id` to the `users` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "booking_policies" DROP CONSTRAINT "booking_policies_resourcesId_fkey";

-- DropForeignKey
ALTER TABLE "bookings" DROP CONSTRAINT "bookings_resourcesId_fkey";

-- DropForeignKey
ALTER TABLE "bookings" DROP CONSTRAINT "bookings_usersId_fkey";

-- DropForeignKey
ALTER TABLE "opening_hours" DROP CONSTRAINT "opening_hours_resourcesId_fkey";

-- DropForeignKey
ALTER TABLE "pricing_rules" DROP CONSTRAINT "pricing_rules_resourcesId_fkey";

-- DropForeignKey
ALTER TABLE "users" DROP CONSTRAINT "users_roleId_fkey";

-- AlterTable
ALTER TABLE "booking_policies" DROP COLUMN "resourcesId",
ADD COLUMN     "resources_id" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "bookings" DROP COLUMN "resourcesId",
DROP COLUMN "usersId",
ADD COLUMN     "resources_id" INTEGER NOT NULL,
ADD COLUMN     "user_id" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "opening_hours" DROP COLUMN "resourcesId",
ADD COLUMN     "resources_id" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "pricing_rules" DROP COLUMN "resourcesId",
ADD COLUMN     "resources_id" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "users" DROP COLUMN "roleId",
ADD COLUMN     "role_id" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "users" ADD CONSTRAINT "users_role_id_fkey" FOREIGN KEY ("role_id") REFERENCES "roles"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "opening_hours" ADD CONSTRAINT "opening_hours_resources_id_fkey" FOREIGN KEY ("resources_id") REFERENCES "resources"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "bookings" ADD CONSTRAINT "bookings_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "bookings" ADD CONSTRAINT "bookings_resources_id_fkey" FOREIGN KEY ("resources_id") REFERENCES "resources"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "pricing_rules" ADD CONSTRAINT "pricing_rules_resources_id_fkey" FOREIGN KEY ("resources_id") REFERENCES "resources"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "booking_policies" ADD CONSTRAINT "booking_policies_resources_id_fkey" FOREIGN KEY ("resources_id") REFERENCES "resources"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
