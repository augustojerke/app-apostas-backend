import { UsuarioService } from "../Services/UsuarioService"
import { Autenticador } from "./Autenticador"

const usuarioService = new UsuarioService()

export interface UsuarioSchema {
   id_usuario: number | null,
   nome: string,
   senha: string,
   saldo: number | null
}

export class Usuario extends Autenticador{

   private id_usuario: number | null
   private nome: string
   private senha: string
   private saldo: number | null

   constructor(u: UsuarioSchema){
      super()
      this.id_usuario = u.id_usuario
      this.nome = u.nome
      this.senha = u.senha
      this.saldo = 0
   }

   getNome = () => this.nome
   getSenha = () => this.nome
   getSaldo = () => this.nome

   async cadastrarUsuario(){

      await usuarioService.cadastrarUsuario(this.nome, this.senha)

   }

   async loginUsuario(){

      const usuario = await usuarioService.loginUsuario(this.nome, this.senha)

      if(usuario){
         this.validarToken()
      }

   }   
}