-- CreateTable
CREATE TABLE "Aposta" (
    "id_aposta" SERIAL NOT NULL,
    "id_usuario" INTEGER NOT NULL,
    "valor" DECIMAL(65,30) NOT NULL,
    "id_evento" INTEGER NOT NULL,
    "finalizada" BOOLEAN NOT NULL,

    CONSTRAINT "Aposta_pkey" PRIMARY KEY ("id_aposta")
);

-- CreateTable
CREATE TABLE "Evento" (
    "id_evento" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "time_casa" TEXT NOT NULL,
    "time_visitante" TEXT NOT NULL,

    CONSTRAINT "Evento_pkey" PRIMARY KEY ("id_evento")
);

-- AddForeignKey
ALTER TABLE "Aposta" ADD CONSTRAINT "Aposta_id_usuario_fkey" FOREIGN KEY ("id_usuario") REFERENCES "Usuario"("id_usuario") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Aposta" ADD CONSTRAINT "Aposta_id_evento_fkey" FOREIGN KEY ("id_evento") REFERENCES "Evento"("id_evento") ON DELETE RESTRICT ON UPDATE CASCADE;
