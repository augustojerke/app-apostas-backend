/*
  Warnings:

  - You are about to drop the column `time_casa` on the `Evento` table. All the data in the column will be lost.
  - You are about to drop the column `time_visitante` on the `Evento` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Evento" DROP COLUMN "time_casa",
DROP COLUMN "time_visitante";
