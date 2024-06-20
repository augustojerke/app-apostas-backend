import { UsuarioService } from "../Services/UsuarioService"
import { Autenticador } from "./Autenticador"
import { ApostaService } from "../Services/ApostaService"

const usuarioService = new UsuarioService()
const apostaService = new ApostaService();

export interface UsuarioSchema {
   id_usuario: number
   nome: string,
   senha: string,
   saldo: number | null
}

export class Usuario extends Autenticador{

   private id_usuario: number
   private nome: string
   private senha: string
   private saldo: number | null

   constructor(u: UsuarioSchema){
      super()
      this.id_usuario = 0
      this.nome = u.nome
      this.senha = u.senha
      this.saldo = 0
   }

   getNome = () => this.nome
   getSenha = () => this.nome
   getSaldo = () => this.nome

   setId_usuario = (id: number) => this.id_usuario = id;
   setNome = (nome: string) => this.nome = nome; 
   setSenha = (senha: string) => this.senha = senha; 
   setSaldo = (saldo: number) => this.saldo = saldo;  

   async cadastrarUsuario(){

      await usuarioService.cadastrarUsuario(this.nome, this.senha);

   }

   async loginUsuario(nome: string, senha: string){

      const usuario = await usuarioService.loginUsuario(nome, senha)

      if(usuario){

         this.setId_usuario(usuario.id_usuario);
         this.setNome(usuario.nome);
         this.setSenha(usuario.senha);
         this.setSaldo(usuario.saldo.toNumber())

         this.validarToken(this.id_usuario, this.nome, this.senha)

         return this.getToken();

      }

      return false;

   } 
   
   async listarApostasPorUsuario(){
      
      return await apostaService.listarApostasPorUsuario(this.id_usuario)

   }
 
}