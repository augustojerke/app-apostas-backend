import { PrismaClient } from "@prisma/client";
import { ApostaSchema } from "../Classes/Aposta";

const prisma = new PrismaClient();

export class ApostaService{

    async realizarAposta(valor: number, id_usuario: number, id_evento: number){

        await prisma.aposta.create({ data: {
            valor: valor,
            id_usuario: id_usuario,
            id_evento: id_evento,
            finalizada: false
        } })
            
    }

    async listarApostasPorUsuario(id: number){

        return await prisma.aposta.findMany({
           where:{
              id_usuario: id
           }
        })
  
     }

}