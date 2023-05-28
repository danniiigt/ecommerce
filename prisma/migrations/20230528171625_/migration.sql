/*
  Warnings:

  - You are about to drop the column `businessName` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `paypalId` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `saldo` on the `User` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "User" DROP COLUMN "businessName",
DROP COLUMN "paypalId",
DROP COLUMN "saldo";
