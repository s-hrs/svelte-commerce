-- CreateTable
CREATE TABLE "product" (
    "id" INTEGER NOT NULL,
    "name" CHAR(100) NOT NULL,
    "created_date_time" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "product_pkey" PRIMARY KEY ("id")
);
