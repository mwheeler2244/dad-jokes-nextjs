/*
  Warnings:

  - You are about to drop the column `setup` on the `SavedJoke` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[userId,joke]` on the table `SavedJoke` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `joke` to the `SavedJoke` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "SavedJoke_userId_setup_key";

-- AlterTable
ALTER TABLE "SavedJoke" DROP COLUMN "setup",
ADD COLUMN     "joke" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "SavedJoke_userId_joke_key" ON "SavedJoke"("userId", "joke");
