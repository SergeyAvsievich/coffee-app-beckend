-- CreateTable
CREATE TABLE "CoffeeModel" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "rating" INTEGER NOT NULL,
    "size" TEXT NOT NULL,
    "price" INTEGER NOT NULL,
    "image" TEXT NOT NULL
);
