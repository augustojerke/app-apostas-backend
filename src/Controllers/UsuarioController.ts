import { Response, Request } from "express";
import { Usuario, UsuarioSchema } from "../Classes/Usuario";

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

      console.log(req.body)

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

      const { novoSaldo, operacao } = req.body;

      usuario.operacaoDeSaldo(novoSaldo, operacao);

      res.json({ message: "Saldo Atualizado" })
   }

   async listarUsuario(req: Request, res: Response){

      res.json({data: await usuario.listarUsuario()})

   }

}

export { UsuarioController }