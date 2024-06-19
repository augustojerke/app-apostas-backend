import { Router, Request, Response } from "express";
import { UsuarioController } from "./Controllers/UsuarioController";

const router = Router();

router.post('/usuario', new UsuarioController().CadastrarUsuario)
router.post('/loginUsuario', new UsuarioController().LoginUsuario)

export {router};