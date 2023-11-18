/*
  Warnings:

  - A unique constraint covering the columns `[id]` on the table `product` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[stripe_id]` on the table `product` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `image` to the `product` table without a default value. This is not possible if the table is not empty.
  - Added the required column `price` to the `product` table without a default value. This is not possible if the table is not empty.
  - Added the required column `stripe_id` to the `product` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
CREATE SEQUENCE product_id_seq;
ALTER TABLE "product" ADD COLUMN     "description" TEXT,
ADD COLUMN     "featured" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "image" TEXT NOT NULL,
ADD COLUMN     "price" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "stripe_id" TEXT NOT NULL,
ALTER COLUMN "id" SET DEFAULT nextval('product_id_seq');
ALTER SEQUENCE product_id_seq OWNED BY "product"."id";

-- CreateIndex
CREATE UNIQUE INDEX "product_id_key" ON "product"("id");

-- CreateIndex
CREATE UNIQUE INDEX "product_stripe_id_key" ON "product"("stripe_id");
