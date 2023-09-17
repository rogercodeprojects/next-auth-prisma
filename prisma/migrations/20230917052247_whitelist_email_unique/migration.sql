/*
  Warnings:

  - A unique constraint covering the columns `[email]` on the table `WhiteListUsers` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "WhiteListUsers_email_key" ON "WhiteListUsers"("email");
