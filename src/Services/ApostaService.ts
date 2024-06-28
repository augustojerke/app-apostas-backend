import { PrismaClient } from "@prisma/client";
import { ApostaSchema } from "../Classes/Aposta";

const prisma = new PrismaClient();

export class ApostaService{

    async realizarAposta(valor: number, id_usuario: number, id_evento: number){

        return await prisma.aposta.create({ data: {
            valor: valor,
            id_usuario: id_usuario,
            id_evento: id_evento,
            finalizada: false
        } })
            
    }

    async listarApostasPorUsuario(id: number){

        const apostas =  await prisma.aposta.findMany({
           where:{
              id_usuario: id
           },
           include:{
            evento:{
                select:{
                    nome: true
                }
            }
           }
        })

        return apostas
  
    }

    async setarFinalizada(id: number){

        return await prisma.aposta.update({
           where: {
            id_aposta: id
           },
           data: {
            finalizada: true
           }
        })
  
    }

}