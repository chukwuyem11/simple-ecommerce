-- AlterTable
ALTER TABLE `categories` ADD COLUMN `userId` INTEGER;

-- AlterTable
ALTER TABLE `orders` ADD COLUMN `userId` INTEGER;

-- AlterTable
ALTER TABLE `product` ADD COLUMN `userId` INTEGER;

-- AlterTable
ALTER TABLE `reviews` ADD COLUMN `userId` INTEGER;

-- AlterTable
ALTER TABLE `subcategories` ADD COLUMN `userId` INTEGER;

-- AddForeignKey
ALTER TABLE `Orders` ADD FOREIGN KEY (`userId`) REFERENCES `users`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Product` ADD FOREIGN KEY (`userId`) REFERENCES `users`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Categories` ADD FOREIGN KEY (`userId`) REFERENCES `users`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Subcategories` ADD FOREIGN KEY (`userId`) REFERENCES `users`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Reviews` ADD FOREIGN KEY (`userId`) REFERENCES `users`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
