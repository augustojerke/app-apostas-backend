import { Response, Request } from "express";
import { PrismaClient } from '@prisma/client'
import { Aposta, ApostaSchema } from "../Classes/Aposta";

const prisma = new PrismaClient()

export class ApostaController{

   async realizarAposta(req: Request, res: Response){  
      
      const data : ApostaSchema = req.body;

      const aposta = new Aposta(data);

      await aposta.realizarAposta();

      res.send({message: "Aposta Criada"})

   }
}