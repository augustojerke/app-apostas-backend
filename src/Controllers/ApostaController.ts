import { Response, Request } from "express";
import { Aposta, ApostaSchema } from "../Classes/Aposta";

export class ApostaController{

   async realizarAposta(req: Request, res: Response){  
      
      const data : ApostaSchema = req.body;

      const aposta = new Aposta(data);
      await aposta.realizarAposta();
      await aposta.setarFinalizada()

      res.send({message: "Aposta Criada"})

   }
}