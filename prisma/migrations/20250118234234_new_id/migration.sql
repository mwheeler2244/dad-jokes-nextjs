-- DropForeignKey
ALTER TABLE "SavedJoke" DROP CONSTRAINT "SavedJoke_userId_fkey";

-- AddForeignKey
ALTER TABLE "SavedJoke" ADD CONSTRAINT "SavedJoke_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("clerkUserId") ON DELETE RESTRICT ON UPDATE CASCADE;
