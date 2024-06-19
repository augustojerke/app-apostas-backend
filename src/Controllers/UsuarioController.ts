import { Response, Request } from "express";
import { PrismaClient } from '@prisma/client'
import { Usuario, UsuarioSchema } from "../Classes/Usuario";

const prisma = new PrismaClient()

class UsuarioController{

   async CadastrarUsuario(req: Request, res: Response){

      const data: UsuarioSchema = req.body;

      const novoUsuario = new Usuario(data);
      await novoUsuario.cadastrarUsuario();

      res.json({ message: "Usuário Cadastrado" });

  }

  async LoginUsuario(req: Request, res: Response){

      const data: Usuario = req.body

      const usuario = await prisma.usuario.findFirst({
         where:{
            nome: data.nome,
            senha: data.senha
         }
      })

      if(usuario) {
         const token = `${usuario.id_usuario}/${usuario.nome}/${usuario.senha}`;
         res.status(201).json({ token: token })
      }
      else{
         res.status(401).json({ message: "Credenciais Inválidas" })
      }
  }
    
}

export { UsuarioController }