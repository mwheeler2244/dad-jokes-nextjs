/*
  Warnings:

  - You are about to drop the column `jokeId` on the `SavedJoke` table. All the data in the column will be lost.
  - You are about to drop the column `punchline` on the `SavedJoke` table. All the data in the column will be lost.
  - You are about to drop the column `rating` on the `SavedJoke` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[userId,setup]` on the table `SavedJoke` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX "SavedJoke_userId_jokeId_key";

-- AlterTable
ALTER TABLE "SavedJoke" DROP COLUMN "jokeId",
DROP COLUMN "punchline",
DROP COLUMN "rating";

-- CreateIndex
CREATE UNIQUE INDEX "SavedJoke_userId_setup_key" ON "SavedJoke"("userId", "setup");
