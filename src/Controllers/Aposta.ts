import { Response, Request } from "express";
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

class Aposta{

   async ListarApostas(req: Request, res: Response){

      const apostas = await prisma.aposta.findMany();
      res.status(200).json(apostas);

   }

   

}