import { Router, Request, Response } from "express";
import { UsuarioController } from "./Controllers/UsuarioController";
import { ApostaController } from "./Controllers/ApostaController";

const router = Router();

//Usuário
router.post('/usuario', new UsuarioController().CadastrarUsuario)
router.post('/loginUsuario', new UsuarioController().LoginUsuario)
router.get("/apostasUsuario", new UsuarioController().listarApostasPorUsuario)

//Aposta
router.post("/realizarAposta", new ApostaController().realizarAposta)

export {router};