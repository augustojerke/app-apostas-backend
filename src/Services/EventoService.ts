import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export class EventoService{

    async listarEventos(){

        return await prisma.evento.findMany();

    }

}