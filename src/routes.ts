import { Router, Request, Response } from "express";
import { UsuarioController } from "./Controllers/UsuarioController";
import { ApostaController } from "./Controllers/ApostaController";
import { EventoController } from "./Controllers/EventoController";

const router = Router();

//Usuário
router.post('/usuario', new UsuarioController().CadastrarUsuario)
router.post('/loginUsuario', new UsuarioController().LoginUsuario)
router.get("/apostasUsuario", new UsuarioController().listarApostasPorUsuario)
router.put("/atualizarSaldo", new UsuarioController().atualizarSaldo)
router.get("/listarUsuario", new UsuarioController().listarUsuario)

//Aposta
router.post("/realizarAposta", new ApostaController().realizarAposta)

//Evento
router.get("/eventos", new EventoController().listarEventos)

export {router};