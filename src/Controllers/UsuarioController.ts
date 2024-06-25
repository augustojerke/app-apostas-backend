import { Response, Request } from "express";
import { PrismaClient } from '@prisma/client'
import { Usuario, UsuarioSchema } from "../Classes/Usuario";

const prisma = new PrismaClient()
var usuario : Usuario;

class UsuarioController{

   async CadastrarUsuario(req: Request, res: Response){

      const data: UsuarioSchema = req.body;

      usuario = new Usuario(data);
      await usuario.cadastrarUsuario();

      res.json({ message: "Usuário Cadastrado" });

  }

   async LoginUsuario(req: Request, res: Response){

      const data: UsuarioSchema = req.body;

      if(usuario == undefined){
         usuario = new Usuario(data)
      }

      const login = await usuario.loginUsuario(data.nome, data.senha);

      if(login){
         res.json({ token: login, message: "Logado com Sucesso!" })
         return;
      }

      res.json({ token: false, message: "Login Inválido" })

   }
  
   async listarApostasPorUsuario(req: Request, res: Response){

      const apostas = await usuario.listarApostasPorUsuario()

      res.json({ data: apostas })

   }

   async atualizarSaldo(req: Request, res: Response){

      const { novoSaldo } = req.body;

      usuario.atualizarSaldo(novoSaldo);

      res.json({ message: "Saldo Atualizado" })
   }

}

export { UsuarioController }