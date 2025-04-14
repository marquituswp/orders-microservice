/*
  Warnings:

  - Added the required column `paid2` to the `Order` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Order" ADD COLUMN     "paid2" BOOLEAN NOT NULL;
