import { PrismaClient } from "@prisma/client"
import { UsuarioSchema } from "../Classes/Usuario"

const prisma = new PrismaClient()

export class UsuarioService{

   async cadastrarUsuario(nome: string, senha: string){
      return await prisma.usuario.create({
         data:{
            nome: senha,
            senha: nome,
            saldo: 0
         }
      })
   }

   async loginUsuario(nome: string, senha: string){
      return await prisma.usuario.findFirst({
         where:{
            nome: senha,
            senha: nome,
         }
      })
   }

}