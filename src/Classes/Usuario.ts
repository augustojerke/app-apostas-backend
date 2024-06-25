import { UsuarioService } from "../Services/UsuarioService"
import { Autenticador } from "./Autenticador"
import { ApostaService } from "../Services/ApostaService"
import { Pagamento } from "./Pagamento"

const usuarioService = new UsuarioService()
const apostaService = new ApostaService();
const pagamento = new Pagamento();

export interface UsuarioSchema {
   id_usuario: number
   nome: string,
   senha: string,
   saldo: number
}

export class Usuario extends Autenticador{

   private id_usuario: number
   private nome: string
   private senha: string
   private saldo: number

   constructor(u: UsuarioSchema){
      super()
      this.id_usuario = 0
      this.nome = u.nome
      this.senha = u.senha
      this.saldo = 0
   }

   getNome = () => this.nome
   getSenha = () => this.senha
   getSaldo = () => this.saldo

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

   operacaoDeSaldo(valor: number, operacao: number){

      let retorno;

      switch(operacao){
         case 1: 
            retorno = pagamento.depositarSaldo(valor, this); break
         case 2: 
            retorno = pagamento.sacarSaldo(valor, this); break;
         default: break;
      }

   }

   async atualizarSaldo(novoValor: number){

      await usuarioService.atualizarSaldo(novoValor, this.id_usuario)

   }
 
}